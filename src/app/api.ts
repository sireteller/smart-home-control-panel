import { environment } from "../environments/environment";

export const API = {
    status: `${environment.apiBaseUrl}/status`,
    shoppinglist: {
        list: `${environment.apiBaseUrl}/shopping-list`
    },
    anylist: {
        recent: `${environment.anyListApiBaseUrl}/recent`
    },
    meals: {
        meals: `${environment.apiBaseUrl}/meals`,
        mealId: (id: number) => `${environment.apiBaseUrl}/meals/${id}`,
    }
};