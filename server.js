var express = require('express');
var app = express();

app.get('/timed-static/:time/*', function(req, res){
  var time = req.params.time;
  var path = req.param(0);
  setTimeout(function() {
  	res.sendfile("public/" + path);
  }, time);
});

app.use('/static', express.static(__dirname + '/public'));

app.listen(3000);