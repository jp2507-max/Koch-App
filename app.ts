import { Application } from '@nativescript/core';
import { colors } from './shared/styles/colors';

// Make colors globally available
global.colors = colors;

Application.run({ moduleName: 'app-root' });