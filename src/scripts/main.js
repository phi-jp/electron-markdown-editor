/*
 *
 */

var Vue = require('vue');
var marked = require('marked');

var app = new Vue({
  el: '#app',
  data: {
    filename: null,
    input: '# Hello, Vue.js\n\n- hoge\n- foo\n- bar',
  },
  filters: {
    marked: marked,
  },
});
app.$watch('filename', function (val) {
  localStorage.setItem('lasted', val);
});

var open = function(filename) {
  File.open(filename, function(filename, input) {
    app.$data.filename = filename;
    app.$data.input = input;
  });
};
Menu.open = function() {
  File.showOpenDialog(function(filename) {
    open(filename);
  });
};

Menu.save = function() {
  if (app.$data.filename) {
    File.save(app.$data.filename, app.$data.input);
  }
  else {
    File.showSaveDialog(function(filename) {
      if (!filename) return ;

      app.$data.filename = filename;
      File.save(app.$data.filename, app.$data.input);
    });
  }
};

// 最後に開いたファイル
var lasted = localStorage.getItem('lasted');
if (lasted) {
  open(lasted);
}