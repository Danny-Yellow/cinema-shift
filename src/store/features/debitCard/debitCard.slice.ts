import type { PayloadAction } from '@reduxjs/toolkit';
import type { IDebitCard } from '@src/types';
import type { TDebitCardFieldName, TDebitCardForm } from '@src/types/features/form/debitCard';
import { createSlice } from '@reduxjs/toolkit';
import { debitCardValidation } from '@src/helpers/validation/debitCardValidation';

const MAX_LENGTHS_MAP = {
	cvv: 3,
	expireDate: 4,
	pan: 8,
};

const initialState: TDebitCardForm = {
	cvv: {
		errorMessage: '',
		value: '',
	},
	expireDate: {
		errorMessage: '',
		value: '',
	},
	pan: {
		errorMessage: '',
		value: '',
	},
};

const debitCardSlice = createSlice({
	initialState,
	name: 'debitCard',
	reducers: {
		changeDebitCardValue: (
			state,
			action: PayloadAction<{ name: keyof IDebitCard; value: string }>,
		) => {
			const { name, value } = action.payload;
			if (/^\d*$/.test(value) && value.length <= MAX_LENGTHS_MAP[name]) {
				state[name].value = value;
			}
		},
		checkErrors: (state) => {
			Object.keys(state).forEach((key) => {
				const fieldName = key as TDebitCardFieldName;
				const fieldValue = state[fieldName].value;
				const validationError =
					debitCardValidation[fieldName](fieldValue);

				state[fieldName].errorMessage = validationError;
			});
		},
		reset: () => ({
			cvv: {
				errorMessage: '',
				value: '',
			},
			expireDate: {
				errorMessage: '',
				value: '',
			},
			pan: {
				errorMessage: '',
				value: '',
			},
		}),
	},
});

export const { changeDebitCardValue, checkErrors, reset } = debitCardSlice.actions;

export default debitCardSlice.reducer;
