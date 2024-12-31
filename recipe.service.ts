import { Recipe } from '../models/recipe.model';

export class RecipeService {
    getRecipes(): Promise<Recipe[]> {
        // In real app, this would be an API call
        return Promise.resolve([
            {
                id: '1',
                title: 'Veggie Stir Fry',
                image: 'res://stirfry',
                prepTime: '20 mins',
                isVegan: true,
                isLowBudget: true,
                isQuick: true
            }
        ]);
    }
}