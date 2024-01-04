import {Component, OnInit} from '@angular/core';
import {ProductService} from "../_services/product.service";
import {Product} from "../_models/product";
import {FavoriteService} from "../_services/favorite.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-product-list',

    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
    products: Product[] = [];
    showFavorites: boolean = false;


    constructor(private productService: ProductService,
                private favoriteService: FavoriteService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.showFavorites = (this.activatedRoute.snapshot.routeConfig as { path: string }).path === 'favorites';

        this.productService.getProducts().subscribe(
            resp => {
                console.log(resp);
                if (this.showFavorites) {
                    this.products = resp.products.filter((item: Product) => this.favoriteService.isFavorite(item.id))
                } else {
                    this.products = resp.products;

                }
            },
            error => {

                console.log(error);
            }
        );


    }

    toggleFavorite(itemId: number) {
        this.favoriteService.toggleFavorite(itemId);

        if (this.showFavorites) {
            this.products = this.products.filter((item: Product) => this.favoriteService.isFavorite(item.id))
        }

    }

    isFavorite(itemId: number) {
        return this.favoriteService.isFavorite(itemId);

    }


}
