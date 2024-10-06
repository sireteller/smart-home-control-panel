import { environment } from "../environments/environment";

export const API = {
    status: `${environment.apiBaseUrl}/status`,
    anylist: {
        base: `${environment.anyListApiBaseUrl}/`,
        id: (id: string) => `${environment.anyListApiBaseUrl}/${id}`,
        recent: `${environment.anyListApiBaseUrl}/recent`
    },
    meals: {
        meals: `${environment.apiBaseUrl}/meals`,
        mealId: (mealId: number) => `${environment.apiBaseUrl}/meals/${mealId}`,
        mealPlan: () => `${environment.apiBaseUrl}/meals/meal-plan`,
        scheduleMeal: (mealId: number) => `${environment.apiBaseUrl}/meals/schedule/${mealId}`
    },
    image: {
        upload: `${environment.apiBaseUrl}/image/upload`
    }
};