var combine = require('stream-combiner');
var through = require('through');
var split = require('split');
var zlib = require('zlib');

function myCombine() {
  var grouper = through(write, end);
  var group;

  function write(data) { 
    if (data.length === 0) return;
    var d = JSON.parse(data);

    if (d.type === 'genre') {
      if (group) {
        this.queue(JSON.stringify(group) + '\n');
      }
      group = { name: d.name, books: [] };
    } else if (d.type === 'book') {
      group.books.push(d.name);
    }
  }
  function end() {
    if (group) {
      this.queue(JSON.stringify(group) + '\n');
    }
    this.queue(null);
  }

  return combine(split(), grouper, zlib.createGzip());
}

module.exports = myCombine;
