import {Component, OnInit} from '@angular/core';
import {ProductService} from "../_services/product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../_models/product";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

    product!: Product;
    selectedIndex: number = 0;

    constructor(private productService: ProductService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        let produvtId = +this.activatedRoute.snapshot.params['id'];
        this.productService.getProduct(produvtId).subscribe(
            resp => {
                this.product = resp;
            },
            error => {
                console.log(error)
            }
        );
    }

    updateIndex(imageIndex: number) {
        this.selectedIndex = imageIndex;
    }
}
