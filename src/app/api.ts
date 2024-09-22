import { environment } from "../environments/environment";

export const API = {
    status: `${environment.apiBaseUrl}/status`,
    shoppinglist: {
        list: `${environment.apiBaseUrl}/shopping-list`
    },
    meals: {
        meal: (id: number) => `${environment.apiBaseUrl}/meals/${id}`,
        list: `${environment.apiBaseUrl}/meals`
    }
};