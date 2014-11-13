var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
  var URL = url.parse(req.url, true);
  var iso = URL.query.iso;
  var date = new Date(iso);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  var response = {};
  if (URL.pathname === '/api/unixtime') {
    response = {
      unixtime: date.getTime()
    };
  } else if (URL.pathname === '/api/parsetime') {
    response = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
  }
  res.end(JSON.stringify(response));
});

server.listen(Number(process.argv[2]));
