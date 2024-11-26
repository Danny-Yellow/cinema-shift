import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { validationMap } from '@src/helpers/validation/validation';

const initialState: IOrderForm = {
	field: {
		city: {
			errorMessage: '',
			value: '',
		},
		email: {
			errorMessage: '',
			value: '',
		},
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

const orderFormSlice = createSlice({
	initialState,
	name: 'modal',
	reducers: {
		changeInputValue: (
			state,
			action: PayloadAction<{ name: TFormName; value: string }>,
		) => {
			const { name, value } = action.payload;
			state.field[name].value = value;
		},
		submit: (state) => {
			Object.keys(state.field).forEach((key) => {
				const fieldName = key as TFormName;
				const fieldValue = state.field[fieldName].value;
				const validationError = validationMap[fieldName](fieldValue);

				state.field[fieldName].errorMessage = validationError;
			});
		},
	},
});

export const { changeInputValue, submit } = orderFormSlice.actions;

export default orderFormSlice.reducer;
