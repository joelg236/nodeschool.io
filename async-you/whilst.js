var async = require('async'),
    http = require('http');

var url = process.argv[2];

var count = 0, response = "";
async.whilst(
    function() {
        return response !== "meerkat";
    }, function (cb) {
        http.get(url, function(res) {
            count++;
            d = '';
            res.on('data', function(data) {
              d += data;
            });
            res.on('end', function() {
                response = d;
                cb();
            });
        });
    }, function (err) {
        console.log(count);
    });
