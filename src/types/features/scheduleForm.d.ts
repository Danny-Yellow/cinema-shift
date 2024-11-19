interface ISelectedSchedule {
	date: string;
	seance: IScheduleSeanse | null;
}

interface ISelectedSeat {
	row: number;
	col: number;
	price: number;
}
