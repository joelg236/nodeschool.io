var fs = require('fs');
var path = require('path');

function print(dir, ext, callback) {
  fs.readdir(dir, function(err, list) {
    if (err) 
      return callback(err);
    var matched = [];
    for (var i = 0; i < list.length; i++) {
      if (path.extname(list[i]) === '.' + ext)
        matched.push(list[i]);
    }
    callback(null, matched);
  });
}

module.exports = print;
