import type { PayloadAction } from '@reduxjs/toolkit';
import type { IScheduleSeanse, ISelectedSchedule, ISelectedSeat } from '@src/types';
import { createSlice } from '@reduxjs/toolkit';

interface IScheduleForm {
	selectedSchedule: ISelectedSchedule;
	selectedSeats: ISelectedSeat[];
}

const initialState: IScheduleForm = {
	selectedSchedule: {
		date: '',
		seance: null,
	},
	selectedSeats: [],
};

export const scheduleFormSlice = createSlice({
	initialState,
	name: 'scheduleForm',
	reducers: {
		changeSelectedDate: (state, action: PayloadAction<string>) => {
			state.selectedSchedule.date = action.payload;
			state.selectedSchedule.seance = null;
		},

		changeSelectedTime: (state, action: PayloadAction<IScheduleSeanse>) => {
			state.selectedSchedule.seance = action.payload;
		},

		reset: (state) => {
			Object.assign(state, initialState);
		},

		selectSeat: (state, action: PayloadAction<ISelectedSeat>) => {
			const { col, row } = action.payload;

			const seatKey = `${col} ${row}`;
			const seatIndex = state.selectedSeats.findIndex(
				(seat) => `${seat.col} ${seat.row}` === seatKey,
			);

			if (seatIndex !== -1) {
				state.selectedSeats.splice(seatIndex, 1);
			} else {
				state.selectedSeats.push(action.payload);
			}
		},
	},
});

export const { changeSelectedDate, changeSelectedTime, reset, selectSeat } =
	scheduleFormSlice.actions;

export default scheduleFormSlice.reducer;
