import { Component, Input } from '@angular/core';
import { ShoppingListItem } from '../../models/shopping-list.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-list-item.component.html',
  styleUrl: './shopping-list-item.component.css',
})
export class ShoppingListItemComponent {
  @Input() item!: ShoppingListItem;
}
