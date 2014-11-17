var tar = require('tar');
var zlib = require('zlib');
var through = require('through');
var crypto = require('crypto');

var parser = tar.Parse();
parser.on('entry', function (e) {
  if (e.type !== 'File') return;
  var hash = crypto.createHash('md5', {encoding: 'hex'});
  e.pipe(hash).pipe(through(function (d) {
    this.queue(d + ' ' + e.path + '\n');
  })).pipe(process.stdout);
});

process.stdin
  .pipe(crypto.createDecipher(process.argv[2], process.argv[3]))
  .pipe(zlib.createGunzip())
  .pipe(parser)
;
