var http = require('http');
var express = require('express');
var twilio = require('twilio');
var bodyParser = require('body-parser');
var dotenv = require('dotenv');
dotenv.load();
var fromNum = '+12039417889';

var app = express();
app.use(bodyParser.urlencoded({extended: false}));


app.post('/sms', function(req, res) {
  var twilio = require('twilio');
  var message = req.body.Body.toLowerCase().trim();
  console.log(message)
  if(message == "aid"){
    res.send("<Response> <Message> Message received. Members are being notified.\n\nSending location to safehouses and parents...\n\nNearest safehouse is 1234 Street Ave.\n\nRemain calm, help is on the way. </Message> </Response>");
  }
  res.writeHead(200, {'Content-Type': 'text/xml'});
});

http.createServer(app).listen(1337, function () {
  console.log("Express server listening on port 1337");
});
