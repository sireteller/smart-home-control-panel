import { Component, Input, OnInit } from '@angular/core';
import { StatusService } from '../../../services/status.service';
import { ShoppinglistService } from '../../../services/shoppinglist.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../card/card.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './shoppinglist.component.html'
})
export class ShoppinglistComponent implements OnInit {
 
  list!: any[];

  constructor(private shoppinglistService: ShoppinglistService){
  }

  ngOnInit(): void {
    this.shoppinglistService.getList().subscribe((result) => {
      this.list = result;
      console.log(this.list);
    })
  }

}
