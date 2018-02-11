const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const url = require('./constants').MONGODB;
var db;

MongoClient.connect(url, function(err, database) {
  db = database;
  console.log("Database connection ready");
});


const app = express();
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
})); 
const PORT = process.env.PORT || 5000;

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Answer API requests.
app.get('/api', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send('{"message":"Hello from the custom server!"}');
});

app.get('/members', function(req, res){
  var dbo = db.db("ascendance");
  dbo.collection("members").find({}).toArray(function(err, docs){
    if(err){
      console.log(err);
    }
    res.status(200).json(docs);
  });
});

app.post('/members', function(req, res){
  
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
