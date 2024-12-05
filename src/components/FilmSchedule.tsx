import type { ISchedule, IScheduleSeanse, ISelectedSchedule } from '@src/types';
import type { ComponentProps, FC } from 'react';
import {
	changeSelectedDate,
	changeSelectedTime,
} from '@src/store/features/schedule/scheduleSelection.slice';
import { useDispatch } from 'react-redux';
import { ScheduleAllTimes } from './ScheduleAllTimes';
import { ScheduleDays } from './ScheduleDays';

interface IFilmScheduleProps extends ComponentProps<'div'> {
	schedules: ISchedule[];
	selectedSchedule: ISelectedSchedule;
}

export const FilmSchedule: FC<IFilmScheduleProps> = ({
	className,
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
		<section className={className}>
			<h2 className="title mb-6 text-2xl">Расписание</h2>
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
