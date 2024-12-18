import type { PayloadAction } from '@reduxjs/toolkit';
import type { ISigninFields, ISigninForm } from '@src/types';
import { createSlice } from '@reduxjs/toolkit';
import { validPhone } from '@src/helpers/validation/validation';

const initialState: ISigninForm = {
	codeIsSent: false,
	fields: {
		code: {
			error: '',
			value: '',
		},
		phone: {
			error: '',
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
			action: PayloadAction<{ name: keyof ISigninFields; value: string }>,
		) => {
			const { name, value } = action.payload;
			if (/^\d*$/.test(value)) {
				state.fields[name].value = value;
			}

			if (name === 'phone') {
				state.codeIsSent = false;
				state.fields.code = {
					error: '',
					value: '',
				};
			}
		},

		deleteError: (state, action: PayloadAction<keyof ISigninFields>) => {
			state.fields[action.payload].error = '';
		},

		sendCode: (state) => {
			const error = validPhone(state.fields.phone.value);

			if (error.length) {
				state.fields.phone.error = error;
			} else {
				state.codeIsSent = true; // Вероятно должно считаться в селекторе
			}
		},
	},
});

export const { changeInputValue, deleteError, sendCode } =
	signinFormSlice.actions;

export default signinFormSlice.reducer;
