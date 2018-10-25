var mySql = require('mysql');

var con = mySql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
});

con.connect(function(err) {
  if (err) {
    return console.log('error connecting to my sql: ', err);
  }
  console.log('connected to the database');
});

con.query('DROP DATABASE IF EXISTS robinhood', function (err) {
  if (err) {
    return console.log('error droping database: ', err);
  }
  console.log('succesfully dropped database');
});

con.query('CREATE DATABASE robinhood', function(err) {
  if (err) {
    return console.log('err creating database robinhood: ', err);
  }
  console.log('created database robinhood');
});

con.query('USE robinhood', function (err) {
  if (err) {
    return console.log('err using the db robinhood: ', err);
  }
  console.log('using robin hood');
});

con.query('CREATE TABLE companies (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name CHAR(40) NOT NULL)', function(err) {
  if (err) {
    return console.log('error creating companies: ', err);
  }
  console.log('created companies table');
});

con.query('CREATE TABLE stocks (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, company INT NOT NULL, dateTime INT NOT NULL, price INT NOT NULL, \
  FOREIGN KEY (company) REFERENCES companies(id))', function(err) {
    if (err) {
      return console.log('error creating stocks table: ', err);
    }
    console.log('created stocks table');
});

module.exports = con;