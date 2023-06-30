import { Component, OnInit, OnDestroy } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
})
export class TimeComponent implements OnInit, OnDestroy {
  clock!: string;
  date!: string;
  intervalId!: any;

  ngOnInit() {
    this.updateTime();
    this.intervalId = setInterval(this.updateTime.bind(this), 5000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  updateTime() {
    const date = new Date();
    this.clock = formatDate(date, 'HH:mm', 'en-EE');
    this.date = formatDate(date, 'dd MMM YYYY', 'en-EE');
  }
}
