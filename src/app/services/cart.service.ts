import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = {};

  getCartLength() {
    return Object.keys(this.cartItems).length;
    // return 1;
  }

  addToCart(product) {
    if (this.cartItems[product.id]) {
      this.cartItems[product.id]['count'] += 1;
    } else {
      this.cartItems[product.id] = { 'product': product, 'count': 1 };
    }
  }

  removeFromCart(itemId) {
    delete this.cartItems[itemId];
  }

  incrementCount(itemId) {
    this.cartItems[itemId].count += 1;
  }

  decrementCount(itemId) {
    this.cartItems[itemId].count -= 1;
    if (this.cartItems[itemId].count === 0) {
      this.removeFromCart(itemId);
      return this.getCartLength();
    }
  }

  getCartItems() {
    return this.cartItems;
  }
  constructor() { }
}
