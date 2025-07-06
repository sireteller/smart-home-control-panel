import { Component, Input } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { TimeComponent } from '../../time/time.component';
import {ElectricityCardComponent} from "../../cards/electricity/electricity-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, TimeComponent, ElectricityCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
