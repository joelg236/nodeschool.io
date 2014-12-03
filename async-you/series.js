var http = require('http');
var async = require('async');

async.series(
  {
    requestOne: function(callback) {
      http.get(process.argv[2], function(res) {
        res.on('data', function(d) {
          callback(null, d.toString());
        });
        res.on('error', function(e) {
          callback(e, null);
        })
      });
    },
    requestTwo: function(callback) {
      http.get(process.argv[3], function(res) {
        res.on('data', function(d) {
          callback(null, d.toString());
        });
        res.on('error', function(e) {
          callback(e, null);
        })
      });
    }
  },
  function(err, result){
    console.log(result);
  }
);
