const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('index.html');
});

  app.get('*', (req, res) => {
    res.status(404).send("Oops something went wrong");
  });

module.exports = app;
