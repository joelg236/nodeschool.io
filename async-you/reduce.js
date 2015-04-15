var async = require('async'),
    http = require('http');

var url = process.argv[2];

async.reduce(['one', 'two', 'three'], 0, function(memo, item, cb) {
  http.get(url + '?number=' + item, function(res) {
    d = '';
    res.on('data', function(data) {
      d += data;
    }); 
    res.on('end', function() {
      cb(null, Number(d) + memo);
    })
  });
}, function (err, result) {
  console.log(result);
});
