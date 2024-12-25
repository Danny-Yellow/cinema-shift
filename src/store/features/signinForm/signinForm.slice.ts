import type { PayloadAction } from '@reduxjs/toolkit';
import type { ISigninForm, TSigninFieldName } from '@src/types';
import { createSlice } from '@reduxjs/toolkit';
import { validPhone } from '@src/helpers/validation/validation';

const initialState: ISigninForm = {
	codeIsSent: false,
	fields: {
		code: {
			errorMessage: '',
			value: '',
		},
		phone: {
			errorMessage: '',
			value: '',
		},
	},
};

const signinFormSlice = createSlice({
	initialState,
	name: 'signinForm',
	reducers: {
		changeInputValue: (
			state,
			action: PayloadAction<{ name: TSigninFieldName; value: string }>,
		) => {
			const { name, value } = action.payload;
			if (/^\d*$/.test(value)) {
				state.fields[name].value = value;
			}

			if (name === 'phone') {
				state.codeIsSent = false;
				state.fields.code = {
					errorMessage: '',
					value: '',
				};
			}
		},

		deleteError: (state, action: PayloadAction<TSigninFieldName>) => {
			state.fields[action.payload].errorMessage = '';
		},

		sendCode: (state) => {
			const error = validPhone(state.fields.phone.value);

			if (error.length) {
				state.fields.phone.errorMessage = error;
			} else {
				state.codeIsSent = true; // Вероятно должно считаться в селекторе
			}
		},
	},
});

export const { changeInputValue, deleteError, sendCode } =
	signinFormSlice.actions;

export default signinFormSlice.reducer;
