var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var db = require('../db/db.js');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let port = 3004;

app.listen(port, function(err) {
  if (err) {
    return console.log(`error connection to port ${port}`);
  }
  console.log(`listening at port ${port}`);
});