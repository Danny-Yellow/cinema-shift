import { configureStore } from '@reduxjs/toolkit';
import { cinemaApi } from '@src/store/api/cinemaApi';
import { authApi } from './api/authApi';
import { rootReducer } from './reducers';

export const store = configureStore({
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(cinemaApi.middleware, authApi.middleware),
	reducer: rootReducer,
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
