import { Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { ShoppingListComponent } from './components/views/shopping-list/shopping-list.component';
import { FoodComponent } from './components/views/food/food.component';
import { CalendarComponent } from './components/views/calendar/calendar.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'food', component: FoodComponent },
  { path: 'calendar', component: CalendarComponent },
];
