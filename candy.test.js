const Candy = require('./candy')

describe('candy class', () => {
  const candy = new Candy('Mars', 4.99)
  
  it('returns the candy name', () => {
    expect(candy.getName()).toEqual('Mars')
  })

  it('returns the candy price', () => {
    expect(candy.getPrice()).toEqual(4.99)
  })

})