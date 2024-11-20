import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IModal = {
	name: '',
};

const modalSlice = createSlice({
	initialState,
	name: 'modal',
	reducers: {
		closeModal: (state) => {
			state.name = '';
		},
		openModal: (state, action: PayloadAction<IModal>) => {
			state.name = action.payload.name;
		},
	},
});

export const { closeModal, openModal } = modalSlice.actions;

export default modalSlice.reducer;
