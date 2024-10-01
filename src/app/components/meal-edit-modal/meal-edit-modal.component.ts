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
  selectedFile!: File;
  imagePreview!: string | ArrayBuffer | null;
  mealForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private mealService: MealService
  ) {}

  ngOnInit(): void {
    this.mealForm = this.formBuilder.group({
      name: [this.meal.name, Validators.required],
    });
    if (this.meal.id) {
      //this.mealService.getMeal(this.meal.id).subscribe((meal) => {
      //    this.meal = meal;
      //});
    }
    if (this.meal.mealImageUrl) {
      if (this.meal.mealImageUrl.startsWith('/')) {
        this.imagePreview = environment.apiBaseUrl + this.meal.mealImageUrl;
      } else {
        this.imagePreview = this.meal.mealImageUrl;
      }
    }
  }

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length) {
      this.selectedFile = fileInput.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onSubmit() {
    if (!this.mealForm.valid || (!this.meal.id && !this.selectedFile)) {
      return;
    }

    const formData = new FormData();
    if (this.meal.id) {
      formData.append('id', this.meal.id.toString());
    }
    formData.append('name', this.mealForm.get('name')?.value);
    formData.append('category', this.meal.category);
    formData.append('image', this.selectedFile);
    this.mealService.saveMeal(formData).subscribe(() => {
      this.closeModal(true);
    });
  }

  closeModal(updated: boolean) {
    this.closing = true;

    setTimeout(() => {
      this.modalClosed.emit(updated);
    }, 300);
  }
}
