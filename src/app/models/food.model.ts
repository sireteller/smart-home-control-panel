export type Meal = {
  id?: number;
  ingredients?: MealIngredient[];
  name: string;
  category: string;
  mealImageId?: string;
  mealImageFileName?: string;
  mealImageUrl?: string;
};

export type MealIngredient = {
  id?: number;
  name: string;
  quantity: number;
};

export type ScheduledMeal = {
  id: number;
  date: string;
  meal: Meal; 
};

export type MealPlanDay = {
  date: Date;
  meals: ScheduledMeal[];
};

export type MealDragData = {
  scheduledMealId?: number;
  meal: Meal;
};