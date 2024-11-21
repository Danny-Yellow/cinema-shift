import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IOrderForm = {
	fields: [
		{
			isRequired: true,
			label: 'Имя*',
			name: 'firstname',
			placeholder: 'Введите имя',
			value: '',
		},
		{
			isRequired: true,
			label: 'Фамилия*',
			name: 'lastname',
			placeholder: 'Введите фамилию',
			value: '',
		},
		{
			isRequired: false,
			label: 'Отчество',
			name: 'middlename',
			placeholder: 'Введите отчество',
			value: '',
		},
		{
			isRequired: true,
			label: 'Телефон*',
			name: 'phone',
			placeholder: 'Введите номер телефона',
			value: '',
		},
		{
			isRequired: false,
			label: 'Почта',
			name: 'email',
			placeholder: 'Введите адрес почты',
			value: '',
		},
		{
			isRequired: false,
			label: 'Город',
			name: 'city',
			placeholder: 'Введите город',
			value: '',
		},
	],
};

const orderFormSlice = createSlice({
	initialState,
	name: 'modal',
	reducers: {
		changeInputValue: (
			state,
			action: PayloadAction<{ name: string; value: string }>,
		) => {
			const indexOfField = state.fields.findIndex(
				(field) => field.name === action.payload.name,
			);
			state.fields[indexOfField].value = action.payload.value;
		},
	},
});

export const { changeInputValue } = orderFormSlice.actions;

export default orderFormSlice.reducer;
