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
        mealId: (id: number) => `${environment.apiBaseUrl}/meals/${id}`,
    },
    image: {
        upload: `${environment.apiBaseUrl}/image/upload`
    }
};