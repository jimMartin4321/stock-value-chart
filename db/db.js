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
  con.query('SELECT * FROM stocks WHERE (company = ?)', [companyId], (err, data) => {
    if (err) {
      callback(err);
    }
    callback(null, data);
  });
};
