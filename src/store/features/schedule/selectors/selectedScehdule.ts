import type { RootState } from '@src/store/store';

export const getSelectedSchedule = (state: RootState) =>
	state.scheduleSelection.selectedSchedule;
