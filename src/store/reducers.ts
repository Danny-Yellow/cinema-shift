import { combineReducers } from '@reduxjs/toolkit';
import { authApi } from './api/authApi';
import { cinemaApi } from './api/cinemaApi';
import { usersApi } from './api/usersApit';
import debitCardReducer from './features/debitCard/debitCard.slice';
import modalReducer from './features/modal/modal.slice';
import personalDataFormReducer from './features/personalDataForm/personalDataForm.slice';
import scheduleSelectionReducer from './features/schedule/scheduleSelection.slice';
import signinFormReducer from './features/signinForm/signinForm.slice';

export const rootReducer = combineReducers({
	[authApi.reducerPath]: authApi.reducer,
	[cinemaApi.reducerPath]: cinemaApi.reducer,
	debitCard: debitCardReducer,
	modal: modalReducer,
	personalDataForm: personalDataFormReducer,
	scheduleSelection: scheduleSelectionReducer,
	signinForm: signinFormReducer,
	[usersApi.reducerPath]: usersApi.reducer,
});
