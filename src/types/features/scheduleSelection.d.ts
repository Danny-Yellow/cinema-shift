interface ISelectedSchedule {
	date: string;
	seance: IScheduleSeanse | null;
}

interface ISelectedSeat {
	col: number;
	price: number;
	row: number;
}
