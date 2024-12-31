import { Frame } from '@nativescript/core';

export class NavigationService {
    static navigate(path: string) {
        Frame.topmost().navigate({
            moduleName: path,
            animated: true
        });
    }

    static goBack() {
        Frame.topmost().goBack();
    }
}