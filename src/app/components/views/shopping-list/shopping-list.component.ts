import { Component, Input, OnInit } from '@angular/core';
import { ShoppinglistService } from '../../../services/shoppinglist.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../card/card.component';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit {
  list!: any[];

  constructor(private shoppingListService: ShoppinglistService) {}

  ngOnInit(): void {
    this.shoppingListService.getList().subscribe((result) => {
      this.list = result;
      console.log(this.list);
    });
  }
}
