import { CommonModule } from '@angular/common';
import { MealService } from '../../services/meal.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Meal } from '../../models/food.model';
import { environment } from '../../../environments/environment';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ShoppingListService } from '../../services/shoppinglist.service';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-meal-edit-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './meal-edit-modal.component.html',
  styleUrl: './meal-edit-modal.component.css',
})
export class MealEditModal implements OnInit {
  @Input() meal!: Meal;
  @Output() modalClosed = new EventEmitter<boolean>();

  closing: boolean = false;
  imagePreview!: string | null;
  mealForm!: FormGroup;
  recentIngredients!: any[];

  constructor(
    private formBuilder: FormBuilder,
    private imageService: ImageService,
    private mealService: MealService,
    private shoppingListService: ShoppingListService
  ) {}

  ngOnInit(): void {
    this.mealForm = this.formBuilder.group({
      name: [this.meal.name, Validators.required],
      ingredients: ['', Validators.nullValidator],
    });
    this.mealForm.valueChanges.subscribe(formValue => {
      this.meal.name = formValue.name;
    });
    if (this.meal.id) {
      //this.mealService.getMeal(this.meal.id).subscribe((meal) => {
      //    this.meal = meal;
      //});
    }
    if (this.meal.mealImageUrl) {
      this.setImagePreviewUrl(this.meal.mealImageUrl);
    }
    this.loadRecentIngredients();
  }

  loadRecentIngredients() {
    this.shoppingListService.getRecent().subscribe((items) => {
      this.recentIngredients = items;
    });
  }

  setImagePreviewUrl(imageUrl: string) {
    if (imageUrl.startsWith('/')) {
      this.imagePreview = environment.apiBaseUrl + imageUrl;
    } else {
      this.imagePreview = imageUrl;
    }
  }

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length) {
      const formData = new FormData();
      formData.append('file', fileInput.files[0]);
      this.imageService.uploadImage(formData).subscribe((image: any) => {
        this.meal.mealImageId = image.id;
        this.setImagePreviewUrl(image.imageUrl);
      });
    }
  }

  onIngredientAdd() {
    const ingredientsInput = this.mealForm.get('ingredients');
    const ingredientsValue = ingredientsInput?.value;

    if (!ingredientsValue) {
      return;
    }

    if (!this.meal.ingredients) {
      this.meal.ingredients = [];
    }

    if (this.meal.ingredients.find((item) => item.name === ingredientsValue)) {
      ingredientsInput?.setValue('');
      return;
    }

    this.meal.ingredients?.push({
      name: this.mealForm.get('ingredients')?.value,
      quantity: 1,
    });

    ingredientsInput?.setValue('');
  }

  onIngredientDecrease(ingredient: any) {
    if (ingredient.quantity === 1) {
      return;
    }

    ingredient.quantity--;
  }

  onIngredientIncrease(ingredient: any) {
    if (ingredient.quantity === 10) {
      return;
    }

    ingredient.quantity++;
  }

  onIngredientRemove(ingredient: any) {
    this.meal.ingredients = this.meal.ingredients?.filter(
      (item) => item.name !== ingredient.name
    );
  }

  onSubmit() {
    if (!this.mealForm.valid) {
      return;
    }

    this.mealService.saveMeal(this.meal).subscribe(() => {
      this.closeModal(true);
    });
  }

  deleteMeal() {
    if (this.meal.id) {
      this.mealService.deleteMeal(this.meal.id).subscribe(() => {
        this.closeModal(true);
      });
    }
  }

  closeModal(updated: boolean) {
    this.closing = true;

    setTimeout(() => {
      this.modalClosed.emit(updated);
    }, 300);
  }
}
