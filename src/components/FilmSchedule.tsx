import type { ISchedule, IScheduleSeanse } from '@src/types';
import type { FC } from 'react';
import {
	changeSelectedDate,
	changeSelectedTime,
} from '@src/store/features/schedule/scheduleForm.slice';
import { useDispatch } from 'react-redux';
import { ScheduleAllTimes } from './ScheduleAllTimes';
import { ScheduleDays } from './ScheduleDays';

interface IFilmScheduleProps {
	schedules: ISchedule[];
	selectedSchedule: ISelectedSchedule;
}

export const FilmSchedule: FC<IFilmScheduleProps> = ({
	schedules,
	selectedSchedule,
}) => {
	const dispatch = useDispatch();

	const seancesOfDate = schedules.find(
		(schedule) => schedule.date === selectedSchedule.date,
	)?.seances;

	function handleDateClick(date: string) {
		dispatch(changeSelectedDate(date));
	}

	function handleTimeClick(seance: IScheduleSeanse) {
		dispatch(changeSelectedTime(seance));
	}

	return (
		<section>
			<h2 className="mb-6 text-2xl font-bold">Расписание</h2>
			<ScheduleDays
				handleClick={handleDateClick}
				schedules={schedules}
				value={selectedSchedule.date}
			/>
			<div className="mb-6 mt-12">
				{selectedSchedule.date && seancesOfDate && (
					<ScheduleAllTimes
						handleTimeClick={handleTimeClick}
						seances={seancesOfDate}
						selectedSchedule={selectedSchedule}
					/>
				)}
			</div>
		</section>
	);
};
