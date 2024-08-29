Api Money Transfer

## Table of Contents

1. [Overview](Overview)
2. [Design Decisions](Design-Decisions)
3. [Setup](Setup)
4. [Usage](Usage)
5. [Further Improvements](Further-Improvements)

## Overview

This project is simple back transaction and convert money management system built using Node.js, Typscript and PostgreSQL. It Allow user to tranfer funds between accounts and Buying/selling daily,The main goal is to demonstrate basic CRUD operations, transaction handling, error management.

## Design Decisions

DatabaseChoice (PostgreSQL): Chosen for its robust support for ACID transactions and scalability.

API Design: RESTful principles were followed to make the API predictable and easy to use. 

##Setup
1.Clone The respository
```
$ git clone https://github.com/Patsanaphon-ap/api_money.git
$ cd api_money
```
2.Install dependencies:
```
$ npm install
```
3.Configure environment variables:
```
PORT = 4002
DB_PORT = 5431
DB_HOST = 'localhost'
DB_USERNAME = 'postgres'
DB_PASSWORD = ''
DB_DATABASE = 'postgres'
FLAG_IMAGE_URL = 'https://www.bot.or.th'
```
4.Start the server:
```
npm start
```
##Usage
* Post User API:
    * Endpoint: `POST /profile/user`
    * Request body:
```
{
    "userid": 1
}
```
*Note: Normally mobile number or email and return JWT TOKEN back use header to login but for this time it faster login ,userid for find user.

* Post Preview receiverProfile API:
    * Endpoint: `POST /money/receiverprofile`
    * Request body:
```
{
    "receiverid":2
}
```

* Post Trasnfer API:
    * Endpoint: `POST /money/transfer`
    * Request body:
```
{
    "sendid": 1,
    "receieveid": 2,
    "amount": 100,
    "description": "GOOD WATER"
}
```
*Header Token for check that user is correct or not or someone else?

* Post History Transfer API:
    * Endpoint: `POST /exchange/history`
    * Request body:
```
{
    "keyword":1,
    "page":1,
    "limit":10
}
```

* Get ExchangeRate API:
    * Endpoint: `GET /exchange/rate`

## Further Improvements
* Implement Login with return JWT Token for enhanced security.
* Add comprehensive unit and integration tests to cover edge cases.
* Optimize database queries for better performance with large datasets.
* Fix Docker image





