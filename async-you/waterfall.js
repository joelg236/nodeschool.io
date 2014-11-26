var http = require('http'),
    fs = require('fs'),
    async = require('async');

async.waterfall([
  fs.readFile.bind(fs, process.argv[2], 'utf8'),
  function (data, cb) {
    http.get(data, function(res) {
      res.on('data', function (res) {
        cb(null, res.toString());
      });
    });
  }
], function (err, data) {
  console.log(data)
});
