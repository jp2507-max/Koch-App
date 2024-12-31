import { NavigatedData, Page } from '@nativescript/core';
import { RecipesViewModel } from './recipes-view-model';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new RecipesViewModel();
}