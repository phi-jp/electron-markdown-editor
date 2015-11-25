var remote = require('remote');
var Dialog = remote.require("dialog");
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
          Dialog.showOpenDialog(function(filenames) {
            if (!filenames) return ;
            File.open(filenames[0]);
          });
        },
      },
      {
        label: 'Save',
        accelerator: "CmdOrCtrl+S",
        click: function() {
          if (File.lasted) {
            File.save(File.lasted, app.$data.input);
          }
          else {
            Dialog.showSaveDialog(function(filename) {
              if (filename) {
                File.save(filename, app.$data.input);
              }
            });
          }
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

