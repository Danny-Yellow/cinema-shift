import { combineReducers } from '@reduxjs/toolkit';
import { api } from './api/api';
import modalReducer from './features/modal/modal.slice';
import personalDataFormReducer from './features/personalDataForm/personalDataForm.slice';
import scheduleSelectionReducer from './features/schedule/scheduleSelection.slice';

export const rootReducer = combineReducers({
	[api.reducerPath]: api.reducer,
	modal: modalReducer,
	personalDataForm: personalDataFormReducer,
	scheduleSelection: scheduleSelectionReducer,
});
