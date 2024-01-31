import { Component, Input } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { TimeComponent } from '../../time/time.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, TimeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
}
