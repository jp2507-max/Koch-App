import { EventData } from '@nativescript/core';
import { NavigationService } from '../navigation/navigation.service';

export function onNavigateToHome(args: EventData) {
    NavigationService.navigate('screens/home/home-page');
}

export function onNavigateToShoppingList(args: EventData) {
    NavigationService.navigate('screens/shopping-list/shopping-list-page');
}

export function onNavigateToProfile(args: EventData) {
    NavigationService.navigate('screens/profile/profile-page');
}

export function onNavigateToSettings(args: EventData) {
    NavigationService.navigate('screens/settings/settings-page');
}