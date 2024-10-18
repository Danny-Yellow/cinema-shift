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

interface IScheduleSeanse {
	time: string;
	hall: {
		name: string;
		places: [[() => void]];
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
