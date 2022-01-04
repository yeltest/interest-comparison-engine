# Interest Comparison Engine

Interest Comparison Engine

## Installation:

```bash
npm install
```
```bash
npm start
```

## Usage:

Call the service with:
```bash
http://localhost:3000/interests/difference?fromdate={date}&currencies={currencies}
```
## Example:

```bash
http://localhost:3000/interests/difference?fromdate=01/01/2020&currencies=BTC,DOGE
```
will result with: (exact numbers depend on the date)
```bash
[{"BTC":"558%"},{"DOGE":"8325%"}]
```
## Tests :
```bash
npm test
```

## Todo:
Validations - 

1. Check that given date is in the right format
2. Check if currencies really exist (or in the right format at least)
3. Check if currency existed for a given date

More tests - 

Test for the client and api to crypto compare, validators, route, etc.

Refactor - 

1. Move logic written in interests.js to a folder for business logic
2. use env variable for storing API key