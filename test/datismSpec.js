const expect = require('chai').expect
const dateism = require('..')

describe('dateism', () => {
  it('returns todays date in the specified format', () => {
    const dates = dateism('YYYY-MM-DD', new Date('2017-05-13'))
    expect(dates.today()).to.eql('2017-05-13')
  })

  it('returns yesterdays date in the specified format', () => {
    const dates = dateism('YYYY-MM-DD', new Date('2017-05-13'))
    expect(dates.yesterday()).to.eql('2017-05-12')
  })

  it('returns the date from two days ago in the specified format', () => {
    const dates = dateism('YYYY-MM-DD', new Date('2017-05-13'))
    expect(dates.twoDaysAgo()).to.eql('2017-05-11')
  })

  it('returns the date from three days ago in the specified format', () => {
    const dates = dateism('YYYY-MM-DD', new Date('2017-05-13'))
    expect(dates.threeDaysAgo()).to.eql('2017-05-10')
  })

  it('returns tomorrows date in the specified format', () => {
    const dates = dateism('YYYY-MM-DD', new Date('2017-05-13'))
    expect(dates.tomorrow()).to.eql('2017-05-14')
  })
})
