export interface ITicket {
	filmId: string;
	row: number;
	column: number;
	seance: {
		date: string;
		time: string;
	};
	phone: string;
}

export interface IPlace {
	price: number;
	type: 'BLOCKED' | 'ECONOM' | 'COMFORT';
}

export type TPlaces = IPlace[][];

export enum HallName {
	Red = 'Красный',
	Green = 'Зеленый',
	Blue = 'Синий',
}

export interface IScheduleSeanse {
	time: string;
	hall: {
		name: HallName;
		places: TPlaces;
	};
	payedTickets: ITicket;
}

export interface ISchedule {
	date: string;
	seances: IScheduleSeanse[];
}

export interface IScheduleResponse {
	success: boolean;
	reason?: string;
	schedules: ISchedule[];
}
