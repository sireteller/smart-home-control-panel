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
}
