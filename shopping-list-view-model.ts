import { Observable } from '@nativescript/core';
import { ShoppingItem } from '../../shared/models/shopping-item.model';

export class ShoppingListViewModel extends Observable {
    private _items: ShoppingItem[] = [];

    constructor() {
        super();
        this.loadItems();
    }

    get shoppingItems(): ShoppingItem[] {
        return this._items;
    }

    onAddItem() {
        // Placeholder - would typically show a dialog
        const newItem: ShoppingItem = {
            id: Date.now().toString(),
            name: 'New Item',
            completed: false
        };
        this._items.push(newItem);
        this.notifyPropertyChange('shoppingItems', this.shoppingItems);
    }

    onDeleteItem(args: any) {
        const index = this._items.findIndex(item => item.id === args.object.bindingContext.id);
        if (index > -1) {
            this._items.splice(index, 1);
            this.notifyPropertyChange('shoppingItems', this.shoppingItems);
        }
    }

    private loadItems() {
        // Placeholder data - would typically come from storage
        this._items = [
            { id: '1', name: 'Tomatoes', completed: false },
            { id: '2', name: 'Onions', completed: false }
        ];
        this.notifyPropertyChange('shoppingItems', this.shoppingItems);
    }
}