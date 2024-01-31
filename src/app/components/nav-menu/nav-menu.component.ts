import { Component } from '@angular/core';
import { TimeComponent } from '../time/time.component';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [TimeComponent],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css',
})
export class NavMenuComponent {}
