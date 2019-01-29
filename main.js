var electron = require('electron');
var fs = require('fs');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow;

var rawdata = fs.readFileSync('winProperties.json');  
var windowProperties = JSON.parse(rawdata);

function createWindow () {
    mainWindow = new BrowserWindow({ 
        width: windowProperties.width,
        height: windowProperties.height,
        frame: windowProperties.frame,
        windows10Frame: windowProperties.windows10Frame,
        resizable: windowProperties.resizable,
        transparent: windowProperties.transparent,
        icon: windowProperties.icon
    });
    mainWindow.setMenu(null);
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    //Open the DevTools.
    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (mainWindow == null) {
        createWindow();
    }
});