import type { PayloadAction } from '@reduxjs/toolkit';
import type { TModal } from '@src/types/features/modal';
import { createSlice } from '@reduxjs/toolkit';

type TModalState = TModal | { data: null; name: '' };

const initialState: TModalState = {
	data: null,
	name: '',
};

const modalSlice = createSlice({
	initialState,
	name: 'modal',
	reducers: {
		closeModal: (state) => {
			Object.assign(state, initialState);
		},

		openModal: (state, action: PayloadAction<TModal>) => {
			Object.assign(state, action.payload);
		},
	},
});

export const { closeModal, openModal } = modalSlice.actions;

export default modalSlice.reducer;
