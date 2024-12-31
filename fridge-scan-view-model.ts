import { Observable } from '@nativescript/core';

export class FridgeScanViewModel extends Observable {
    private _ingredients = [];

    constructor() {
        super();
    }

    get ingredients() {
        return this._ingredients;
    }

    onTakePhoto() {
        // Placeholder: Add camera functionality
        console.log('Taking photo...');
        // Simulate adding ingredients
        this._ingredients.push({ name: 'Tomatoes' });
        this.notifyPropertyChange('ingredients', this._ingredients);
    }

    onSuggestRecipes() {
        // Navigate to recipes page
        const frame = require('@nativescript/core').Frame;
        frame.topmost().navigate({
            moduleName: 'screens/recipes/recipes-page',
            animated: true
        });
    }
}