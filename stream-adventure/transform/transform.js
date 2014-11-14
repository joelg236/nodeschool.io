var through = require('through');

function write(buf) {
  this.queue(buf.toString().toUpperCase());
}

var tr = through(write);
process.stdin.pipe(tr).pipe(process.stdout);
