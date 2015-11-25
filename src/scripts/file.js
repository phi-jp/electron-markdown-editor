var fs = require('fs');

var File = {
  lasted: null,

  open: function(filename) {
    var self = this;
    fs.readFile(filename, 'utf8', function(error, data) {
      if (error) { throw error; }

      self.lasted = filename;
      self.onopen(filename, data);
      console.log('open:', filename);
    });
  },

  save: function(filename, data) {
    var self = this;
    fs.writeFile(filename, data, function(error) {
      if (error) { throw error; }
      self.onsave(filename, data);
      self.lasted = filename;
      console.log('save:', filename);
    });
  },

  onopen: function() {},
  onsave: function() {},
};
