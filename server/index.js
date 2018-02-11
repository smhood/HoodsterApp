const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;

//Database
const url = require('./constants').MONGODB;
var db;
MongoClient.connect(url, function(err, database) {
  db = database;
  console.log("Database connection ready");
});

//initialize express
const PORT = process.env.PORT || 5000;

const app = express();
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

app.get('/login', function (req, res) {
  var dbo = db.db("ascendance");
  dbo.collection("members").find({"name": req.query.username, "password": req.query.password }).toArray(function(err, docs){
    if(err){
      console.log(err);
    }

    res.status(200).json({
      authenticated: (docs.length > 0)
    });
  });
});

app.get('/members', function(req, res){
  var dbo = db.db("ascendance");
  dbo.collection("members").find({}).project({password: 0, _id: 0}).toArray(function(err, docs){
    if(err){
      console.log(err);
    }
    res.status(200).json(docs);
  });
});

app.post('/members', function(req, res){
  var dbo = db.db("ascendance");
  dbo.collection("members").insertOne(req.member, function(err, res){
    if(err){
      console.log(err);
    }
    res.status(200).json({response: res});
  });
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
