import { configureStore } from '@reduxjs/toolkit';
import scheduleFormReducer from './features/schedule/scheduleForm.slice';
import { api } from '@src/store/api/api';

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		scheduleForm: scheduleFormReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
