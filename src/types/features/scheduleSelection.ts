import type { IScheduleSeanse } from '../api/schedule';

export interface ISelectedSchedule {
	date: string;
	seance: IScheduleSeanse | null;
}

export interface ISelectedSeat {
	column: number;
	price: number;
	row: number;
}
