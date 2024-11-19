import { FC } from 'react';
import { ScheduleTimes } from './ScheduleTimes';
import { HallName, IScheduleSeanse } from '@src/types';

interface IScheduleTimesProps {
	seances: IScheduleSeanse[];
	selectedSchedule: ISelectedSchedule;
	handleTimeClick: (seance: IScheduleSeanse) => void;
}

interface IHall {
	name: string;
	seances: IScheduleSeanse[];
}

export const ScheduleAllTimes: FC<IScheduleTimesProps> = ({
	seances,
	selectedSchedule,
	handleTimeClick,
}) => {
	const halls: IHall[] = Object.entries(HallName).map(([key, value]) => ({
		name: `${value} зал`,
		seances: seances.filter((seance) => seance.hall.name === key),
	}));

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
