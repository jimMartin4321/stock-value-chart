const mySql = require('mysql');

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

module.exports.getStockPrices = (companyId, callback) => {
  con.query('SELECT price, dateTime FROM stocks WHERE (company = ?) ORDER BY id DESC', [companyId], (err, data) => {
    if (err) {
      return callback(err);
    }
    callback(null, data);
  });
};

module.exports.getCompanyName = (companyId, callback) => {
  con.query('SELECT name FROM companies WHERE (id = ?)', [companyId], (err, data) => {
    if (err) {
      return callback(err);
    }
    callback(null, data);
  });
}