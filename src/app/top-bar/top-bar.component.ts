import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @Input() cartLength;

  constructor(private router: Router, private cartService: CartService) { }

  isLandingPage() {
    return this.router.url.includes('/');
  }

  isBuyerPage() {
    return this.router.url.includes('/buy');
  }

  isSellerPage() {
    return this.router.url.includes('/sell');
  }

  ngOnInit() {
    // this.cartLength = this.cartService.getCartLength();
  }

}
