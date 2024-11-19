import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
	name: 'scheduleForm',
	initialState: initialState,
	reducers: {
		changeSelectedDate: (state, action: PayloadAction<string>) => {
			state.selectedSchedule.date = action.payload;
			state.selectedSchedule.seance = null;
		},

		changeSelectedTime: (state, action: PayloadAction<IScheduleSeanse>) => {
			state.selectedSchedule.seance = action.payload;
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

export const { changeSelectedDate, changeSelectedTime, selectSeat } =
	scheduleFormSlice.actions;

export default scheduleFormSlice.reducer;
