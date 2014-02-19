var express = require('express');
var app = express();

app.engine('jade', require('jade').__express);

app.get('/', function(req, res) {
  res.sendfile('index.html');
});

app.get('/ping', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send({"alive" : true});
});

app.get('/primeFactors', function(req, res) {
  var number = Number(req.query.number);
  var power = Math.log(number) / Math.log(2);
  var results = [];
  for(var i = 0; i < power; i++) {
    results.push(2);
  }
  res.send({"number": number, "decomposition": results});
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
