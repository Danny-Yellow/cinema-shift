import { combineReducers } from '@reduxjs/toolkit';
import { api } from './api/api';
import modalReducer from './features/modal/modal.slice';
import scheduleSelectionReducer from './features/schedule/scheduleSelection.slice';

export const rootReducer = combineReducers({
	[api.reducerPath]: api.reducer,
	modal: modalReducer,
	scheduleSelection: scheduleSelectionReducer,
});
