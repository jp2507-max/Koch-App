import { NavigatedData, Page } from '@nativescript/core';
import { MainViewModel } from './main-view-model';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new MainViewModel();
}