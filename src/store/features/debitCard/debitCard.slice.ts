import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const MAX_LENGTHS_MAP = {
	cvv: 3,
	expireDate: 4,
	pan: 8,
};

const initialState: IDebitCard = {
	cvv: '',
	expireDate: '',
	pan: '',
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
				state[name] = value;
			}
		},
		reset: () => ({
			cvv: '',
			expireDate: '',
			pan: '',
		}),
	},
});

export const { changeDebitCardValue, reset } = debitCardSlice.actions;

export default debitCardSlice.reducer;
