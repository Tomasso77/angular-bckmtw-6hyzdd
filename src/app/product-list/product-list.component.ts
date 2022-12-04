import { Component } from '@angular/core';

import { products } from '../products';
import { Product } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];

  share(pr: string) {
    window.alert(pr+ " has been shared!");
  }

  onNotify(product: Product) {
    window.alert(`You will be notified when the "${product.name}" goes on sale. \nNow its price is: $ ${product.price}`);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/