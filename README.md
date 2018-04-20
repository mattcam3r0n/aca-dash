# @mcam3r0n/aca-dash
This package is an exercise for ACA JS311.

## Installation
Note that this is a scoped package.  Make sure you include the @mcam3r0n prefix when installing.

`npm install @mcam3r0n/aca-dash`

## Usage

```
const acaDash = require("@mcam3r0n/aca-dash");
const a = [3, 2, 5, 4, 1];

acaDash.map(a, x => x*2);
acaDash.filter(a, x => x > 2);
acaDash.find(a, x => x == 3);
acaDash.findLast(a);
acaDash.head(a);
acaDash.tail(a);
acaDash.reverse(a);
acaDash.sort(a);
```

## Tests

`npm test`
