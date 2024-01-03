import {Component, OnInit} from '@angular/core';
import {ProductService} from "../_services/product.service";
import {Product} from "../_models/product";
import {FavoriteService} from "../_services/favorite.service";

@Component({
    selector: 'app-product-list',

    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
    products: Product[] = [];

    constructor(private productService: ProductService ,
                private favoriteService : FavoriteService ) {
    }

    ngOnInit() {
        this.productService.getProducts().subscribe(
            resp => {
                console.log(resp);
                this.products = resp.products;
            },
            error => {

                console.log(error);
            }
        );

    }

     toggleFavorite(itemId: number) {
    this.favoriteService.toggleFavorite(itemId);
    }
    isFavorite(itemId: number){
 return this.favoriteService.isFavorite(itemId);

    }





}
