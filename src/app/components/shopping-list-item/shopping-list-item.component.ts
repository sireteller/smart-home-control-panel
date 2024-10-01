import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() deleted = new EventEmitter<ShoppingListItem>();

  handleDeleted() {
    this.deleted.emit(this.item);
  }
}
