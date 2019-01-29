var remote = require("electron").remote;
var mainWindow = remote.getCurrentWindow();

if (mainWindow.windows10Frame) {
    console.log("using Windows 10 frame");
}

document.addEventListener("DOMContentLoaded", function () {
    var body = document.getElementsByTagName("body")[0];
    body.setAttribute("onresize", "checkIfMaximized()");
});

function checkIfMaximized () {
    document.write("HellO!");
}
console.log(mainWindow.windows10Frame);