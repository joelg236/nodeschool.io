var split = require('split');
var through = require('through');

process.stdin
  .pipe(split(/\n/))
  .pipe(through(two(
          function (str) {return str.toUpperCase()}, 
          function (str) {return str.toLowerCase()} 
        )))
  .pipe(through(function (buf) {
    this.queue(buf).queue('\n');
  }))
  .pipe(process.stdout)
;

function two(f1, f2) {
  var track = true;
  function switchUp(buf) {
    track = !track;
    if (track) {
      this.queue(f1(buf.toString()));
    } else {
      this.queue(f2(buf.toString()));
    }
  }
  return switchUp;
}
