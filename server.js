var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello Yose');
});

app.get('/ping', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send('{"alive" : true}');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
