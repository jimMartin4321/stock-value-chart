const moment = require('moment-timezone');
const faker = require('faker');
const db = require('./db.js');

const randIncDec = (number) => {
  if (Math.random() > 0.5) {
    return number;
  }
  return -number;
};

(() => {
  const hour = moment().tz('America/New_York').get('hour');
  const minutes = moment().get('minute');
  let numDataPts;
  let dateTime;

  if (hour < 9 || (hour === 9 && minutes < 30) || hour > 16) {
    numDataPts = 78;
    dateTime = moment().hour(16).minutes(0).seconds(0)
      .milliseconds(0);
  } else {
    const roundedDownMins = minutes - (minutes % 5);
    numDataPts = (hour * 12) + (roundedDownMins / 5) - (9.5 * 12);
    dateTime = moment().tz('America/New_York').minutes(roundedDownMins).seconds(0)
      .milliseconds(0);
  }
  for (let i = 0; i < 10; i += 1) {
    const company = {
      name: faker.hacker.abbreviation(),
      id: i + 1,
      price: Number(faker.commerce.price(1, 1000, 2)),
      dateTime: dateTime.clone(),
      priceFlux: () => Math.random() * 0.5,
    };
    db.addCompany(company.name);
    db.addStock(company.id, company.dateTime.format('YYYY-MM-DD HH:mm:ss'), company.price);
    for (let j = 0; j < numDataPts; j += 1) {
      const time = company.dateTime.subtract(5, 'minutes').format('YYYY-MM-DD HH:mm:ss');
      db.addStock(company.id, time, company.price);
      company.price += randIncDec(company.priceFlux());
    }
  }
})();
