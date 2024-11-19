import { RootState } from '@src/store/store';

export const getSelectedSchedule = (state: RootState) =>
	state.scheduleForm.selectedSchedule;
