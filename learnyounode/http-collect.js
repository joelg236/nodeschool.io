var http = require('http');

http.get(process.argv[2], function(res){
  var full = "";
  res.setEncoding('utf8');
  res.on('data', function(data) {
    full += data;
  });
  res.on('end', function(d) {
    console.log(full.length);
    console.log(full);
  });
});
