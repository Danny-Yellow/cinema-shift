export interface ITicket {
	column: number;
	filmId: string;
	phone: string;
	row: number;
	seance: {
		date: string;
		time: string;
	};
}

export interface IPlace {
	price: number;
	type: 'BLOCKED' | 'COMFORT' | 'ECONOM';
}

export type TPlaces = IPlace[][];

export enum HallName {
	Red = 'Красный',
	Green = 'Зеленый',
	Blue = 'Синий',
}

export interface IScheduleSeanse {
	payedTickets: ITicket;
	time: string;
	hall: {
		name: HallName;
		places: TPlaces;
	};
}

export interface ISchedule {
	date: string;
	seances: IScheduleSeanse[];
}

export interface IScheduleResponse {
	reason?: string;
	schedules: ISchedule[];
	success: boolean;
}
