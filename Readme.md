# dateism

For lack of a better name...

## Premise

You are in a situation where you need to get lots of dates relative to a point in time and in the same format.

## Usage

`npm install dateism` or `yarn install dateism`


dateism must be initialised with a format to use and optionally a seed date. If you don't supply a seed date then the date right now will be used.

### Example

```js
const dateism = require('dateism')
const dates = dateism('DD MMM YYYY', new Date('1947-02-15'))

dates.addDays(-5)      // -> '10 Feb 1947'
dates.threeDaysAgo()   // -> '12 Feb 1947' 
dates.twoDaysAgo()     // -> '13 Feb 1947'

dates.today()          // -> '15 Feb 1947'

dates.tomorrow()       // -> '16 Feb 1947'
dates.addDays(5)       // -> '20 Feb 1947'
```

## We're Hiring!
Featurist provides full stack, feature driven development teams. Want to join us? Check out [our career opportunities](https://www.featurist.co.uk/careers/).
