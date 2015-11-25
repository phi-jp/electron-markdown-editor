var remote = require('remote');
var Menu = remote.require('menu');

var menu = Menu.buildFromTemplate([
  {
    label: 'Markdown Editor',
  },
  {
    label: 'File',
    submenu: [
      {
        label: 'Open',
        click: function() {
          Menu.open && Menu.open();
        },
      },
      {
        label: 'Save',
        accelerator: "CmdOrCtrl+S",
        click: function() {
          Menu.save && Menu.save();
        },
      },
    ],
  },
  {
    label: 'Edit',
    submenu: [
      { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
      { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
      { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
      { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" },
    ],
  },
]);

Menu.setApplicationMenu(menu);

