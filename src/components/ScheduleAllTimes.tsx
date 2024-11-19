import { FC } from 'react';
import { ScheduleTimes } from './ScheduleTimes';

interface IScheduleTimesProps {
	seances: IScheduleSeanse[];
	selectedSchedule: ISelectedSchedule;
	handleTimeClick: (seance: IScheduleSeanse) => void;
}

export const ScheduleAllTimes: FC<IScheduleTimesProps> = ({
	seances,
	selectedSchedule,
	handleTimeClick,
}) => {
	const halls = [
		{
			name: 'Красный зал',
			seances: seances.filter((seance) => seance.hall.name === HallName.Red),
		},
		{
			name: 'Зеленый зал',
			seances: seances.filter((seance) => seance.hall.name === HallName.Green),
		},
		{
			name: 'Синий зал',
			seances: seances.filter((seance) => seance.hall.name === HallName.Blue),
		},
	];

	return (
		<>
			<div className="flex flex-col gap-6">
				{halls.map((hall) => (
					<ScheduleTimes
						hall={hall}
						selectedSchedule={selectedSchedule}
						handleTimeClick={handleTimeClick}
					/>
				))}
			</div>
		</>
	);
};
