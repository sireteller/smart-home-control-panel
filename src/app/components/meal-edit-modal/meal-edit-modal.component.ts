import { CommonModule } from "@angular/common";
import { MealService } from "../../services/meal.service";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Meal } from "../../models/food.model";
import { environment } from "../../../environments/environment";

@Component({
    selector: 'app-meal-edit-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './meal-edit-modal.component.html',
    styleUrl: './meal-edit-modal.component.css',
})
export class MealEditModal implements OnInit {
    
    @Input() meal!: Meal;
    @Output() modalClosed = new EventEmitter<void>();
        
    constructor(private mealService: MealService) {}

    ngOnInit(): void {
        if (this.meal.id) {
            //this.mealService.getMeal(this.meal.id).subscribe((meal) => {
            //    this.meal = meal;
            //});
        }
    }

    getFullImageURL() {
      if (this.meal.mealImageUrl && this.meal.mealImageUrl.startsWith('/')) {  
        return environment.apiBaseUrl + this.meal.mealImageUrl;
      }
      return this.meal.mealImageUrl;
    }

    onFileSelected($event: Event) {
    
    }

    closeModal() {
        this.modalClosed.emit();
    }
}