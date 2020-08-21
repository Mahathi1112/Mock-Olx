import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  cartLength;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartLength = this.cartService.getCartLength();
  }

}
