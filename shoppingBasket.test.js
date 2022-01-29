const ShoppingBasket = require('./ShoppingBasket')
const Candy = require('./Candy')

describe('ShoppingBasket class', () => {
  it('has a default value of 0', () => {
    const basket = new ShoppingBasket();
    expect(basket.getTotalPrice()).toEqual(0)
  })

  it('adds a candy item', () => {
    const candy = { 
        getName: () => 'Skittles',
        getPrice: () => 3.99
    }
    const basket = new ShoppingBasket();
    basket.addItem(candy)
    expect(basket.getTotalPrice()).toEqual(3.99)
  })
})