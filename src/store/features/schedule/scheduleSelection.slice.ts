import type { PayloadAction } from '@reduxjs/toolkit';
import type {
	IScheduleSeanse,
	ISelectedSchedule,
	ISelectedSeat,
} from '@src/types';
import { createSlice } from '@reduxjs/toolkit';

interface IScheduleForm {
	filmId: string;
	selectedSchedule: ISelectedSchedule;
	selectedSeats: ISelectedSeat[];
}

const initialState: IScheduleForm = {
	filmId: '',
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

		reset: () => ({
			filmId: '',
			selectedSchedule: {
				date: '',
				seance: null,
			},
			selectedSeats: [],
		}),

		selectSeat: (state, action: PayloadAction<ISelectedSeat>) => {
			const { column, row } = action.payload;

			const seatKey = `${column} ${row}`;
			const seatIndex = state.selectedSeats.findIndex(
				(seat) => `${seat.column} ${seat.row}` === seatKey,
			);

			if (seatIndex !== -1) {
				state.selectedSeats.splice(seatIndex, 1);
			} else {
				state.selectedSeats.push(action.payload);
			}
		},

		setFilmId: (state, action: PayloadAction<string>) => {
			state.filmId = action.payload;
		},
	},
});

export const {
	changeSelectedDate,
	changeSelectedTime,
	reset,
	selectSeat,
	setFilmId,
} = scheduleFormSlice.actions;

export default scheduleFormSlice.reducer;
