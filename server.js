var express = require('express');
var app = express();

app.disable('etag');

 app.use(function(req, res, next) {
  	res.setHeader('Pragma', 'No-cache');
  	res.setHeader('Cache-Control', 'max-age=0, must-revalidate');
    return next();
  });

app.get('/timed-static/:time/*', function(req, res){
  var time = req.params.time;
  var path = req.param(0);
  setTimeout(function() {
  	res.status(200).sendfile("public/" + path, {'etag': false, 'max-age': 0});
  }, time);
});

app.get('/static/*', function(req, res){
  var time = req.params.time;
  var path = req.param(0);
  res.status(200).sendfile("public/" + path, {'etag': false, 'max-age': 0});
});

app.listen(3000);