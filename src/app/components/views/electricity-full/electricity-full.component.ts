import { Component } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { ElectricityCardComponent } from "../../cards/electricity/electricity-card.component";

@Component({
  selector: 'app-electricity-full',
  standalone: true,
  imports: [CardComponent, ElectricityCardComponent],
  templateUrl: './electricity-full.component.html',
  styleUrl: './electricity-full.component.css'
})
export class ElectricityFullComponent {

}
