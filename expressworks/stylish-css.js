var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3]));
app.get('/', function (req, res) {
  res.render(process.argv[3] + '/index.html');
});
app.listen(process.argv[2]);
