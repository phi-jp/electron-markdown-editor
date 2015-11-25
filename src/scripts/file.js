var fs = require('fs');
var remote = require('remote');
var Dialog = remote.require("dialog");

var File = {
  lasted: null,

  open: function(filename, callback) {
    var self = this;
    fs.readFile(filename, 'utf8', function(error, data) {
      if (error) { throw error; }

      self.lasted = filename;
      callback && callback(filename, data);
      console.log('open:', filename);
    });
  },

  save: function(filename, data, callback) {
    var self = this;
    fs.writeFile(filename, data, function(error) {
      if (error) { throw error; }

      self.lasted = filename;
      callback && callback(filename, data);
      console.log('save:', filename);
    });
  },

  showOpenDialog: function(callback) {
    Dialog.showOpenDialog(function(filenames) {
      if (!filenames) return ;

      callback && callback(filenames[0]);
    });
  },

  showSaveDialog: function(callback) {
    Dialog.showSaveDialog(function(filename) {
      callback && callback(filename);
    });
  },
};
