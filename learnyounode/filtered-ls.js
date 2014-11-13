var fs = require('fs');
var path = require('path');
var file = process.argv[2];
var extension = process.argv[3];

function listExtension(err, list) {
  String.prototype.endsWith = function(suffix) {
      return this.indexOf(suffix, this.length - suffix.length) !== -1;
  };
  function filter(element) {
    return path.extname(element) === '.' + extension;
  }
  list = list.filter(filter);
  for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}
fs.readdir(file, listExtension);
