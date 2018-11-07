const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const db = require('../db/db.js');

const app = express();

app.use(express.static(path.join(__dirname, '../client/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const port = 3004;

app.listen(port, (err) => {
  if (err) {
    return console.log(`error connection to port ${port}`);
  }
  return console.log(`listening at port ${port}`);
});

app.get('/stocks/:companyId', (req, res) => {
  const { companyId } = req.params;
  db.getStockPrices(companyId, (err, data) => {
    if (err) {
      res.end(err);
    }
    res.json(data);
  });
});

app.get('/companies/:companyId', (req, res) => {
  const { companyId } = req.params;
  db.getCompanyName(companyId, (err, data) => {
    if (err) {
      res.end(err);
    }
    res.json(data);
  });
});
