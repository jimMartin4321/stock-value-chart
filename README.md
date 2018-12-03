# Service Description

Service for a trading platform designed using service oriented architecture. The chart displays mock companies stock price data throughout the day. The chart is interactive and displays the price and time of each location on the chart. The chart also has a different color theme depending on whether the market is open, the market is closed, and if the stock is at a profit or loss on the day. This service is implemented using a proxy server, whose link is referenced at the bottom of this read me.

# Host address

http://ec2-3-17-25-148.us-east-2.compute.amazonaws.com/

# Screenshots of the service

Market closed & at a profit:
![Alt text](https://github.com/jimMartin4321/stock-value-chart/blob/master/img/Screen%20Shot%202018-12-02%20at%203.52.25%20PM.png "market closed")

Market open & at a profit:
![Alt text](https://github.com/jimMartin4321/stock-value-chart/blob/master/img/market_open.png "market open")

Market closed & at a loss:
![Alt text](https://github.com/jimMartin4321/stock-value-chart/blob/master/img/loss_screenShot.png "market closed")

# Api

| endpoint | method | description |
| --- | --- | --- |
| /chart/stocks/:companyId | GET | Get the stock prices for given company
| /chart/companies/:companyId | GET | Get information on a specific company

# Proxy Server Code
https://github.com/jimMartin4321/MM-proxy
