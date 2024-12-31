import { Observable } from '@nativescript/core';
import { Recipe } from '../../shared/models/recipe.model';

export class RecipesViewModel extends Observable {
    private _recipes: Recipe[] = [];
    private _isVegan = false;
    private _isLowBudget = false;
    private _isQuick = false;

    constructor() {
        super();
        this.loadRecipes();
    }

    get recipes(): Recipe[] {
        return this._recipes.filter(recipe => 
            (!this._isVegan || recipe.isVegan) &&
            (!this._isLowBudget || recipe.isLowBudget) &&
            (!this._isQuick || recipe.isQuick)
        );
    }

    toggleVegan() {
        this._isVegan = !this._isVegan;
        this.notifyPropertyChange('recipes', this.recipes);
    }

    toggleLowBudget() {
        this._isLowBudget = !this._isLowBudget;
        this.notifyPropertyChange('recipes', this.recipes);
    }

    toggleQuick() {
        this._isQuick = !this._isQuick;
        this.notifyPropertyChange('recipes', this.recipes);
    }

    private loadRecipes() {
        // Placeholder data - would typically come from an API
        this._recipes = [
            {
                id: '1',
                title: 'Veggie Stir Fry',
                image: 'res://stirfry',
                prepTime: '20 mins',
                isVegan: true,
                isLowBudget: true,
                isQuick: true
            }
        ];
        this.notifyPropertyChange('recipes', this.recipes);
    }
}