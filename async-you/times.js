var http = require('http'),
    async = require('async');

var url = "http://" + process.argv[2] + ':' + process.argv[3];

async.series([
  function(done) {
    async.times(5, function(n, next) {
      createUser(++n, function(err){
        next(err);
      });
    }, function (err){
      done(null, "")
    });
  },

  function(done) {
    http.get(url + '/users', function (res) {
      var b = "";
      res.on('data', function(d) {
        b += d.toString();
      });

      res.on('end', function(){done(null, b)});
    });
  }
], function (err, result) {
  console.log(result[1])
});

function createUser(user_id, cb){
  var postdata = JSON.stringify({'user_id': user_id}),
  opts = {
    hostname: process.argv[2],
    port: process.argv[3],
    path: '/users/create',
    method: 'POST',
    headers: {
      'Content-Length': postdata.length
    }
  };

  var req = http.request(opts, function(res){
    res.on('data', function(chunk){})
    res.on('end', function(){
      cb();
    });
  });

  req.write(postdata);
  req.end();
}
