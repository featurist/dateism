const addDays = require('date-fns/add_days')
const formatDate = require('date-fns/format')
const startOfDay = require('date-fns/start_of_day')
const endOfDay = require('date-fns/end_of_day')

class Dateism {
  constructor(format, seed) {
    this.formatPattern = format
    this.seed = seed || new Date()
  }

  addDays (offset) {
    const value = addDays(this.seed, offset)
    return this.format(value)
  }

  today () {
    return this.format(this.seed)
  }

  tomorrow () {
    return this.addDays(1)
  }

  yesterday () {
    return this.addDays(-1)
  }

  twoDaysAgo () {
    return this.addDays(-2)
  }

  threeDaysAgo () {
    return this.addDays(-3)
  }
  
  format (value) {
    return formatDate(value, this.formatPattern)
  }

  startOfDay () {
    return new Dateism(this.formatPattern, startOfDay(this.seed))
  }

  endOfDay () {
    return new Dateism(this.formatPattern, endOfDay(this.seed))
  }
}


module.exports = (format, seed) => {
  return new Dateism(format, seed)
}

