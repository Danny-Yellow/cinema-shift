interface ITicket {
	filmId: string;
	row: number;
	column: number;
	seance: {
		date: string;
		time: string;
	};
	phone: string;
}

interface IPlace {
	price: number;
	type: 'BLOCKED' | 'ECONOM' | 'COMFORT';
}

type TPlaces = IPlace[][];

enum HallName {
	Red = 'Красный',
	Green = 'Зеленый',
	Blue = 'Синий',
}

interface IScheduleSeanse {
	time: string;
	hall: {
		name: HallName;
		places: TPlaces;
	};
	payedTickets: ITicket;
}

interface ISchedule {
	date: string;
	seances: IScheduleSeanse[];
}

interface IScheduleResponse {
	success: boolean;
	reason?: string;
	schedules: ISchedule[];
}
