import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../../../services/shoppinglist.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../card/card.component';
import { ShoppingListItemComponent } from '../../shopping-list-item/shopping-list-item.component';
import { ShoppingListCategory } from '../../../models/shopping-list.model';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [CommonModule, CardComponent, ShoppingListItemComponent],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit {
  list!: ShoppingListCategory[];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.shoppingListService.getList().subscribe((result) => {
      this.list = result;
      console.log(this.list);
    });
  }
}
