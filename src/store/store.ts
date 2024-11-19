import { configureStore } from '@reduxjs/toolkit';
import { api } from '@src/store/api/api';
import scheduleFormReducer from './features/schedule/scheduleForm.slice';

export const store = configureStore({
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
	reducer: {
		[api.reducerPath]: api.reducer,
		scheduleForm: scheduleFormReducer,
	},
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
