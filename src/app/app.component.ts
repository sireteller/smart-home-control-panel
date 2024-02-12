import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { StatusService } from './services/status.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'smart-home-control-panel';

  constructor(private statusService: StatusService){
  }

  ngOnInit(): void {
    this.statusService.checkStatus().subscribe(() => {
      console.log('API is alive!');
    });
  }
}
