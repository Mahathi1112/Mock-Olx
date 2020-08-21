import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../../services/item.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product;
  cartLength;

  addToCart(product) {
    this.cartService.addToCart(product);
    this.cartLength = this.cartService.getCartLength();
    window.alert('Item Added to Cart');
  }

  constructor(private route: ActivatedRoute, private itemService: ItemService, private cartService: CartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = this.itemService.getItemById(params.get('id'));
    });
    this.cartLength = this.cartService.getCartLength();
  }

}
