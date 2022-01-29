const Candy = require('./candy')

class ShoppingBasket {
  constructor() {
    this.price = 0;
    this.basket = [];

  }

  getTotalPrice() {
    this.basket.map(item => {
      this.price += item.getPrice()
    })
    return this.price
  }

  addItem(item) {
    return this.basket.push(item)
  }
}

module.exports = ShoppingBasket;


