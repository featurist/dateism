const addDays = require('date-fns/add_days')
const formatDate = require('date-fns/format')

class Dateism {
  constructor(format, seed) {
    this.formatPattern = format
    this.seed = seed || new Date()
  }

  today () {
    return this.format(this.seed)
  }

  tomorrow () {
    const value = addDays(this.seed, 1)
    return this.format(value)
  }

  yesterday () {
    const value = addDays(this.seed, -1)
    return this.format(value)
  }

  twoDaysAgo () {
    const value = addDays(this.seed, -2)
    return this.format(value)
  }

  threeDaysAgo () {
    const value = addDays(this.seed, -3)
    return this.format(value)
  }
  
  format (value) {
    return formatDate(value, this.formatPattern)
  }
}


module.exports = (format, seed) => {
  return new Dateism(format, seed)
}

