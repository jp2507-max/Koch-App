import { Recipe } from '../models/recipe.model';

export function filterRecipes(recipes: Recipe[], filters: RecipeFilters): Recipe[] {
    return recipes.filter(recipe => 
        (!filters.isVegan || recipe.isVegan) &&
        (!filters.isQuick || recipe.isQuick) &&
        (!filters.isLowBudget || recipe.isLowBudget)
    );
}

export interface RecipeFilters {
    isVegan: boolean;
    isQuick: boolean;
    isLowBudget: boolean;
}