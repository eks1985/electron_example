const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const appMenu = require('./scripts/appMenu');

app.on('ready', () => {
   createWindow();

   const template = appMenu(app, appWindow);
   const menu = electron.Menu.buildFromTemplate(template);

   electron.Menu.setApplicationMenu(menu);
});


app.on('window-all-closed', function() {
   if (process.platform !== 'darwin') {
       app.quit();
   }
});

function createWindow() {
    appWindow = new BrowserWindow({
        width: 300,
        height: 300
    });

    appWindow.loadURL(`file://${__dirname}/index.html`);
};
