import type { IScheduleSeanse, ISelectedSchedule } from '@src/types';
import type { FC } from 'react';
import { HallName } from '@src/types';
import { ScheduleTimes } from './ScheduleTimes';

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
	handleTimeClick,
	seances,
	selectedSchedule,
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
					key={hall.name}
						hall={hall}
						handleTimeClick={handleTimeClick}
						selectedSchedule={selectedSchedule}
					/>
				))}
			</div>
		</>
	);
};
