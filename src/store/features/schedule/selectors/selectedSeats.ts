import { RootState } from '@src/store/store';

export const getSelectedSeats = (state: RootState) =>
	state.scheduleForm.selectedSeats;
