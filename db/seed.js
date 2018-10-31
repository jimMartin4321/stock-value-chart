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
    numDataPts = 108;
    dateTime = moment().hour(16).minutes(0).seconds(0)
      .milliseconds(0);
  } else {
    const roundedDownMins = minutes - (minutes % 5);
    numDataPts = (hour * 12) + (roundedDownMins / 5) - (9.5 * 12);
    dateTime = moment().tz('America/New_York').minutes(roundedDownMins).seconds(0)
      .milliseconds(0);
  }
  for (let i = 0; i < 100; i += 1) {
    const company = {
      name: faker.company.companyName(),
      id: i + 1,
      price: Number(faker.finance.amount(10, 1000, 2)),
      dateTime: dateTime.clone(),
      priceFlux: Math.floor((Math.random() * 5) * 100) / 100,
    };
    db.addCompany(company.name);
    for (let j = 0; j < numDataPts; j += 1) {
      const time = company.dateTime.subtract(5, 'minutes').format('YYYY-MM-DD HH:mm:ss');
      company.price += randIncDec(company.priceFlux);
      db.addStock(company.id, time, company.price);
    }
  }
})();
