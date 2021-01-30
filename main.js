const {app, BrowserWindow} = require('electron'),
        path = require('path'),
        url = require('url')//imported for loading index.html file
//init win
let win;

function createWindow() {
    //create browser window
    win = new BrowserWindow({width:800, height:800, webPreferences: {
        nodeIntegration: true
    }})

    // load index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    //open dev tools
    win.webContents.openDevTools();

    win.on('closed', ()=>{
        win=null;
    });
}

// run create window function
app.on('ready', createWindow);

//quit when all windows are closed
app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin'){
        app.quit();
    }
});