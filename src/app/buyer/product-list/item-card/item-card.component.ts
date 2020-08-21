import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  @Input() productList;
  @Output() addToCart = new EventEmitter();
  cartLength;

  emitAddtoCartEvent(product) {
    this.addToCart.emit({ event, product });
  }

  constructor(private cartService: CartService) {
  }

  ngOnInit() {

    this.cartLength = this.cartService.getCartLength();
  }

}
