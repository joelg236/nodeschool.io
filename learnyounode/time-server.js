var net = require('net');

function format(number) {
  if (number < 10)
    number = "0" + number;

  return number.toString();
}

var server = net.createServer(function(socket) {
  var date = new Date();
  var data = "";
  data += date.getFullYear() + "-";
  data += format(date.getMonth() + 1) + "-";
  data += format(date.getDate()) + " ";
  data += format(date.getHours()) + ":";
  data += format(date.getMinutes()) + '\n';

  socket.end(data);
});
server.listen(Number(process.argv[2]));
