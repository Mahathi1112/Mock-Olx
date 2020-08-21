import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ItemService } from '../../services/item.service';
import { categories } from '../../constants/constants';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-sell-item-form',
  templateUrl: './sell-item-form.component.html',
  styleUrls: ['./sell-item-form.component.css']
})
export class SellItemFormComponent implements OnInit {
  categories;
  cartLength;
  sellerForm = this.formBuilder.group({
    name: ['', Validators.required],
    category: ['', Validators.required],
    originalPrice: ['', Validators.required],
    price: ['', Validators.required],
    yearOfPurchase: ['', [Validators.required, Validators.min(1900), Validators.max(2999)]],
    location: [''],
  });

  onChange(event) {
    this.sellerForm.controls['category'].patchValue(event.target.value);
  }

  onSubmit() {
    this.itemService.addItem(this.sellerForm.value);
    this.sellerForm.reset();
    window.alert('Item Added');
  }
  constructor(private formBuilder: FormBuilder, private itemService: ItemService,
    private cartService: CartService) { }

  ngOnInit() {
    this.categories = categories;
    this.cartLength = this.cartService.getCartLength();
  }

}
