var http = require('http');

function get(url, callback) {
  http.get(url, function(res) {
    var full = "";
    res.setEncoding('utf8');
    res.on('data', function(data) {
      full+=data;
    });
    res.on('end', function(d) {
      callback(full);
    });
  });
}

var callbacks = ["", "", ""];
var results = 0;
function callback(index) {
  return function(full) {
    callbacks[index] = full;
    results += 1;
    if (results === 3)
      callbacks.forEach(function(e) {
        console.log(e);
      });
  };
}

for (var i = 0; i < 3; i++)
  get(process.argv[i + 2], callback(i));
