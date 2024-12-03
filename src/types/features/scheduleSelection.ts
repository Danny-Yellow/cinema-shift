import type { IScheduleSeanse } from '../api/schedule/schedule';

export interface ISelectedSchedule {
	date: string;
	seance: IScheduleSeanse | null;
}

export interface ISelectedSeat {
	col: number;
	price: number;
	row: number;
}
