import {Component, OnInit} from '@angular/core';
import {ProductService} from "../_services/product.service";

@Component({
  selector: 'app-product-list',

  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent  implements OnInit{

constructor(private productService : ProductService) {
}
ngOnInit() {
  this.productService.getProducts().subscribe(
    resp => {
      console.log(resp);

    },
    error => {

      console.log(error);
    }


  );
}

}
