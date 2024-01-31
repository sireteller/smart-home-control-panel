import { Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { ShoppinglistComponent } from './components/views/shoppinglist/shoppinglist.component';
import { FoodComponent } from './components/views/food/food.component';
import { CalendarComponent } from './components/views/calendar/calendar.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'shoppinglist', component: ShoppinglistComponent },
    { path: 'food', component: FoodComponent },
    { path: 'calendar', component: CalendarComponent }
];
