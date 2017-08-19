/**
 * The only prupose of this package is to build and executable file
 */
const electron = require('electron');
const app = electron.app;
const bw = electron.BrowserWindow;
const path = require('path');
const url = require('url');

app.on("ready", function () {
    const screen = electron.screen;
    var main_window = new bw();
    main_window.maximize();
    main_window.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file:",
        slashes: true
    }));
    main_window.on("closed", function () {
        main_window = null;
        app.exit();
    }); 
});