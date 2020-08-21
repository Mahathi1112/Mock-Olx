import { Injectable } from '@angular/core';
import { productList } from '../items';
import { defaultImage } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  category;
  getItems(category?) {
    return category ? productList.filter(element => element.category === category) : productList;
  }

  getItemById(id) {
    return productList.filter(element => element.id === parseInt(id, 10))[0];
  }

  addItem(item) {
    item['imageURL'] = defaultImage[item.category];
    item['id'] = productList.length + 1;
    productList.push(item);
  }
  constructor() { }

}
