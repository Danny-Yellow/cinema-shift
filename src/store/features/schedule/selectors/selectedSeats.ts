import type { RootState } from '@src/store/store';

export const getSelectedSeats = (state: RootState) =>
	state.scheduleSelection.selectedSeats;
