import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FavoriteService {
    private favorites: Set<number> = new Set<number>();

    constructor() {
    }

    toggleFavorite(itemId: number) {
        if (this.favorites.has(itemId)) {
            this.favorites.delete(itemId);
        } else {
            this.favorites.add(itemId);
        }

    }

    isFavorite(itemId: number): boolean {

        return this.favorites.has(itemId);
    }

    getFavorites(): any {
        return this.favorites;
    }

    resetFavorites() {
        this.favorites = new Set<number>();
    }
}
