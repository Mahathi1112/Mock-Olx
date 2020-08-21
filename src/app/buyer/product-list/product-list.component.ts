import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { categories } from '../../constants/constants';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList;
  category;
  categoryList;
  cartLength;

  onChange(event) {
    this.productList = this.itemService.getItems(event.target.value);
    this.category = event.target.value;
  }

  addToCart($event) {
    const product = $event.product;
    this.cartService.addToCart(product);
    this.cartLength = this.cartService.getCartLength();
    window.alert('Item Added to Cart');
  }

  constructor(private itemService: ItemService, private cartService: CartService) { }

  ngOnInit() {
    this.productList = this.itemService.getItems();
    this.categoryList = categories;
    this.cartLength = this.cartService.getCartLength();
  }

}
