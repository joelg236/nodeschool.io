var concat = require('concat-stream');
process.stdin
  .pipe(concat(function(d) {
    console.log(d.toString().split('').reverse().join(''));
  }))
;
