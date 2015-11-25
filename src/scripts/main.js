/*
 *
 */

var Vue = require('vue');
var marked = require('marked');

var app = new Vue({
  el: '#app',
  data: {
    input: '# Hello, Vue.js\n\n- hoge\n- foo\n- bar',
    filename: null,
  },
  filters: {
    marked: marked,
  },
});

File.onopen = function(filename, data) {
  localStorage.setItem('lasted', filename);

  app.$data.filename = filename;
  app.$data.input = data;
};
File.onsave = function(filename, data) {
  localStorage.setItem('lasted', filename);

  app.$data.filename = filename;
};

// 最後に開いたファイル
var lasted = localStorage.getItem('lasted');
if (lasted) {
  File.open(lasted);
}