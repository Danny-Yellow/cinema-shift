import type { PayloadAction } from '@reduxjs/toolkit';
import type { IPersonalDataForm, TPersonalDataFieldName } from '@src/types';
import { createSlice } from '@reduxjs/toolkit';
import { personalDataValidationMap } from '@src/helpers/validation/personalDataValidation';

const initialState: IPersonalDataForm = {
	field: {
		firstname: {
			errorMessage: '',
			value: '',
		},
		lastname: {
			errorMessage: '',
			value: '',
		},
		middlename: {
			errorMessage: '',
			value: '',
		},
		phone: {
			errorMessage: '',
			value: '',
		},
	},
};

const personalDataFormSlice = createSlice({
	initialState,
	name: 'personalDataForm',
	reducers: {
		changeInputValue: (
			state,
			action: PayloadAction<{ name: TPersonalDataFieldName; value: string }>,
		) => {
			const { name, value } = action.payload;
			state.field[name].value = value;
		},
		reset: () => ({
			field: {
				firstname: {
					errorMessage: '',
					value: '',
				},
				lastname: {
					errorMessage: '',
					value: '',
				},
				middlename: {
					errorMessage: '',
					value: '',
				},
				phone: {
					errorMessage: '',
					value: '',
				},
			},
		}),
		submit: (state) => {
			Object.keys(state.field).forEach((key) => {
				const fieldName = key as TPersonalDataFieldName;
				const fieldValue = state.field[fieldName].value;
				const validationError =
					personalDataValidationMap[fieldName](fieldValue);

				state.field[fieldName].errorMessage = validationError;
			});
		},
	},
});

export const { changeInputValue, reset, submit } =
	personalDataFormSlice.actions;

export default personalDataFormSlice.reducer;
