const moment = require('moment');
const faker = require('faker');
const db = require('./db.js');

const randIncDec = (number) => {
  if (Math.random() > 0.5) {
    return number;
  }
  return -number;
};

( () => {
  const hour = moment().get('hour');
  const minutes = moment().get('minute');
  let numDataPts;
  let dateTime;

  if (hour < 5 || hour > 14) {
    numDataPts = 120;
    dateTime = moment().hour(15).minutes(0).seconds(0)
      .milliseconds(0);
  } else {
    const roundedDownMins = minutes - (minutes % 5);
    numDataPts = (hour * 12) + (roundedDownMins / 5) - (5 * 12);
    dateTime = moment().minutes(roundedDownMins).seconds(0)
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

// process.exit(console.log('we have seed succesfully'));