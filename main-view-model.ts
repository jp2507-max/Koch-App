import { Observable, Frame } from '@nativescript/core';
import { colors } from './shared/styles/colors';

export class MainViewModel extends Observable {
    private _userName: string = 'Chef';
    
    constructor() {
        super();
        this.colors = colors;
    }

    get greeting(): string {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good morning';
        if (hour < 18) return 'Good afternoon';
        return 'Good evening';
    }

    get userName(): string {
        return this._userName;
    }

    onBack() {
        Frame.topmost().goBack();
    }

    onScanFridge() {
        Frame.topmost().navigate({
            moduleName: 'features/fridge-scan/pages/fridge-scan-page',
            transition: {
                name: 'slideLeft',
                duration: 300,
                curve: 'easeInOut'
            }
        });
    }

    // ... other navigation methods with animations
}