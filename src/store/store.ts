import { configureStore } from '@reduxjs/toolkit';
import { api } from '@src/store/api/api';
import { rootReducer } from './reducers';

export const store = configureStore({
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
	reducer: rootReducer,
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
