import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../../../services/shoppinglist.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../card/card.component';
import { ShoppingListItemComponent } from '../../shopping-list-item/shopping-list-item.component';
import { ShoppingListCategory, ShoppingListItem } from '../../../models/shopping-list.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [CommonModule, CardComponent, ShoppingListItemComponent, FormsModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit {
  categories!: ShoppingListCategory[];
  recentItems!: ShoppingListItem[];
  name: string = '';

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.loadShoppingList();
    this.loadRecentIngredients();
  }

  loadShoppingList() {
    this.shoppingListService.getList().subscribe((items) => {
      this.categories = [];
      items.forEach((item) => {
        let category = this.categories.find(cat => cat.id === item.categoryMatchId);
        if (!category) {
          category = {
            id: item.categoryMatchId,
            category: this.formatCategoryId(item.categoryMatchId),
            items: []
          };
          this.categories.push(category);
        }
        category.items.push(item);
      });
      this.categories = this.categories.sort((a, b) => {
        if (a.id === "other") return 1;
        if (b.id === "other") return -1;
        return a.category.localeCompare(b.category);
      });
    });
  }

  addItem() {
    if (this.name.trim().length > 0) {
      this.shoppingListService.addItem(this.name.trim()).subscribe(() => {
        this.loadShoppingList();
      });
      this.name = '';
    }
  }

  deleteItem(item: ShoppingListItem) {
    this.shoppingListService.deleteItem(item.identifier).subscribe(() => {
      this.categories.forEach(cat => cat.items = cat.items.filter(i => i.identifier !== item.identifier));
      this.categories = this.categories.filter(cat => cat.items.length > 0);
    });
  }

  loadRecentIngredients() {
    this.shoppingListService.getRecent().subscribe((items) => {
      this.recentItems = items;
    });
  }

  formatCategoryId(id: string): string {
    return id.split('-').map((s) => this.formatWord(s)).join(' ');
  }

  private formatWord(s: string): string {
    if (s === 'and') {
      return '&';
    } else {
      return s.substring(0, 1).toUpperCase() + s.substring(1);
    }
  }
}
