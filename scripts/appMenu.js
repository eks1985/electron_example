const { shell } = require('electron');
const dialog = require('electron').dialog;
const newShotDialog = {
    type: 'info',
    title: 'Hello',
    message: 'Do you like this?',
    buttons: ['Yes', 'No']
};

module.exports = function appMenu(app, appWindow) {
  return (
    [
      {
        label: 'File',
        submenu: [
          {
            label: 'Click me',
            accelerator: 'CmdOrCtrl+N',
            click() {
              dialog.showMessageBox(newShotDialog, function(index) {
              })
             },
          },
        ],
      },
    ]
  );
};
