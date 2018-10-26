var mySql = require('mysql');
var seed = require('./seed.js');

var con = mySql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'robinhood'
});

module.exports.addCompany = (companyName) => {
  con.query('INSERT INTO companies (name) VALUES (?)', [companyName], (err) => {
    if (err) {
      console.log('err with adding company to db: ', err);
    }
  });
};

module.exports.addStock = (companyId, dateTime, price) => {
  con.query('INSERT INTO stocks (company, dateTime, price) VALUES (?, ?, ?)', [companyId, dateTime, price], (err) => {
    if (err) {
      console.log('err with inserting stocks: ', err);
    }
  });
};

con.connect(function(err) {
  if (err) {
    return console.log('error connecting to my sql: ', err);
  }
  seed.populate();
});