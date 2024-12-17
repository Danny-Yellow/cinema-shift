import type { PayloadAction } from '@reduxjs/toolkit';
import type { TModal } from '@src/types/features/modal';
import { createSlice } from '@reduxjs/toolkit';

type TModalState = TModal | { data: null; name: '' };

const initialState: TModalState = {
	data: null,
	name: '',
};

const modalSlice = createSlice({
	initialState: initialState as TModalState,
	name: 'modal',
	reducers: {
		closeModal: () => initialState,
		openModal: (state, action: PayloadAction<TModal>) => {
			state.name = action.payload.name;
			state.data = action.payload.data ?? null;
		},
	},
});

export const { closeModal, openModal } = modalSlice.actions;

export default modalSlice.reducer;
