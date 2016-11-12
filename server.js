var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send("working now");
});

app.listen(3000);
console.log("Listeng port 3000");
