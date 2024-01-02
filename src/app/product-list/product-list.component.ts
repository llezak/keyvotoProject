import {Component, OnInit} from '@angular/core';
import {ProductService} from "../_services/product.service";
import {Product} from "../_models/product";

@Component({
  selector: 'app-product-list',

  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent  implements OnInit{
 products ! : Product[];
constructor(private productService : ProductService) {
}
ngOnInit() {
  this.productService.getProducts().subscribe(
    resp => {
      console.log(resp);
this.products=resp.products;
    },
    error => {

      console.log(error);
    }


  );
}

}
