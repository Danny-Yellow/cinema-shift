import { FC, useState } from 'react';
import { ScheduleDays } from './ScheduleDays';
import { ScheduleAllTimes } from './ScheduleAllTimes';

interface IFilmSchedule {
	schedules: ISchedule[];
}

interface ISeance {
	hall: string;
	time: string;
}

export const FilmSchedule: FC<IFilmSchedule> = ({ schedules }) => {
	const [currentSchedule, setCurrentSchedule] = useState(schedules[0]);
	const [selectedSeance, setSelectedSeance] = useState({
		hall: 'Red',
		time: '10:50',
	});

	function handleDateClick(date: string) {
		const newSchedule = schedules.find((schedule) => schedule.date === date);

		if (newSchedule) {
			setCurrentSchedule(newSchedule);
		}
	}

	function handleTimeClick(seance: ISeance) {
		setSelectedSeance(seance);
	}

	return (
		<div>
			<h2 className="mb-6 text-2xl font-bold">Расписание</h2>
			<ScheduleDays
				value={currentSchedule.date}
				handleClick={handleDateClick}
				schedules={schedules}
			/>
			<ScheduleAllTimes
				handleTimeClick={handleTimeClick}
				seances={currentSchedule.seances}
				selectedSeance={selectedSeance}
			/>
		</div>
	);
};
