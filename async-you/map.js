var http = require('http')
  , async = require('async');
async.map([process.argv[2], process.argv[3]], function(item, done){
  http.get(item, function(res) {
    res.on('data', function(d) {
      return done(null, d.toString());
    });
  });
},
function(err, results){
  console.log(results);
});

