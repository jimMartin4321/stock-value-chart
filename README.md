# Service Description

Service for a trading platform designed using service oriented architecture. The chart displays mock companies stock price data throughout the day. The chart is interactive and displays the price and time of each location on the chart. The chart also has a different color theme depending on whether the market is open, the market is closed, and if the stock is at a profit or loss on the day. This service is implemented using a proxy server, which can be referenced at FILL_ME_IN.

# Host address

http://ec2-3-17-25-148.us-east-2.compute.amazonaws.com/

# Screenshots of the service

Market closed & at a profit:
![Alt text](https://raw.github.com/jimMartin4321/stock-value-chart/img/Screen%Shot%2018-12-02%at%3.52.25%PM.png%Shot%2018-12-02%at%3.52.25%PM.png "market closed")

Market open & at a profit:

Market closed & at a loss:


# Api

| endpoint | method | description |
| --- | --- | --- |
| /chart/stocks/:companyId | GET | Get the stock prices for given company
| /chart/companies/:companyId | GET | Get information on a specific company

## Usage
To run:
- run schema.sql to create SQL database (mysql -u [username] -p [password])
- npm run seed to seed database
- npm start to start server
- hosted on localhost:3001
- run npm run react to compile webapp 

### Installing Dependencies

From within the root directory:

npm install

