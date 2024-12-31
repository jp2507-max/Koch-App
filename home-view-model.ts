import { Observable } from '@nativescript/core';
import { NavigationService } from '../../shared/navigation/navigation.service';
import { colors } from '../../shared/styles/colors';

export class HomeViewModel extends Observable {
    private _userName: string = 'Chef';
    
    constructor() {
        super();
        // Make colors available to the view
        this.colors = colors;
    }

    get welcomeMessage(): string {
        const hour = new Date().getHours();
        let greeting = 'Good ';
        
        if (hour < 12) greeting += 'morning';
        else if (hour < 18) greeting += 'afternoon';
        else greeting += 'evening';
        
        return `${greeting},\n${this._userName}!`;
    }

    // Navigation methods remain the same
    onScanFridge() {
        NavigationService.navigate('screens/fridge-scan/fridge-scan-page');
    }

    // ... other navigation methods
}