import { combineReducers } from '@reduxjs/toolkit';
import { api } from './api/api';
import scheduleSelectionReducer from './features/schedule/scheduleSelection.slice';

export const rootReducer = combineReducers({
	[api.reducerPath]: api.reducer,
	scheduleSelection: scheduleSelectionReducer,
});
