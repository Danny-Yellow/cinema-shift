import { configureStore } from '@reduxjs/toolkit';
import { filmsApi } from '@src/store/api/filmsApi';

export const store = configureStore({
	reducer: {
		[filmsApi.reducerPath]: filmsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(filmsApi.middleware),
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
