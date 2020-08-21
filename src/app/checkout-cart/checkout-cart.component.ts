import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout-cart',
  templateUrl: './checkout-cart.component.html',
  styleUrls: ['./checkout-cart.component.css']
})
export class CheckoutCartComponent implements OnInit {
  cartItems;
  cartLength;

  removeFromCart(itemId) {
    this.cartService.removeFromCart(itemId);
    this.cartLength = this.cartService.getCartLength();
  }

  incrementCount(itemId) {
    this.cartService.incrementCount(itemId);
  }

  decrementCount(itemId) {
    const numOfItems = this.cartService.decrementCount(itemId);
    if (numOfItems || numOfItems === 0) {
      this.cartLength = numOfItems;
    }
  }

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.cartLength = this.cartService.getCartLength();
  }

}
