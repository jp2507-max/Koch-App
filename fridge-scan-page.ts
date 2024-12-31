import { NavigatedData, Page } from '@nativescript/core';
import { FridgeScanViewModel } from './fridge-scan-view-model';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new FridgeScanViewModel();
}