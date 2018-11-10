const Sequelize = require('sequelize');

const sequelize = new Sequelize('robinhood', 'jamesmartin', 'QETUO1177adgjl', {
  dialect: 'mysql',
  host: 'robinhood-charts.c2zlloqmr6gl.us-east-2.rds.amazonaws.com',
  port: '3306',
});

sequelize.query('DROP DATABASE IF EXISTS robinhood').then(() => {
  sequelize.query('CREATE DATABASE robinhood').then(() => {
    sequelize.query('USE robinhood').then(() => {
      sequelize.query('CREATE TABLE companies (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(80) NOT NULL)').then(() => {
        sequelize.query('CREATE TABLE stocks (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, company INT NOT NULL, dateTime DATETIME NOT NULL, price DECIMAL(6, 2) NOT NULL,FOREIGN KEY(company) REFERENCES companies(id));');
      });
    });
  });
});
