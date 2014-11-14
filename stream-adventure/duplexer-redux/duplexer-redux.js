var spawn = require('child_process').spawn;
var duplexer = require('duplexer');
var through = require('through');

module.exports = function (counter) {
  var counts = {};
  var tr = through(wr, end);
  return duplexer(tr, counter);

  function wr(d) {
    counts[d.country] = (counts[d.country] || 0) + 1;
  }
  function end() {
    counter.setCounts(counts);
  }
};
