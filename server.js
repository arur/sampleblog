const express = require('express');
const routes = require('./server/routes/routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/simpleblog');

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());
routes(app);

app.use((err, req, res, next) => {
  res.status(422).send({error: err.message});
});

module.exports = app;
