const mySql = require('mysql');
const seed = require('./seed.js');

const con = mySql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'robinhood',
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

module.exports.getStockPrices = (companyId) => {
  con.query('SELECT price FROM stocks WHERE (company = ?)', [companyId], (err) => {
    if (err) {
      console.log(err);
    }
  });
};

con.connect((err) => {
  if (err) {
    return console.log('error connecting to my sql: ', err);
  }
  return seed.populate();
});
