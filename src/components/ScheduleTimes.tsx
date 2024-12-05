import type { IScheduleSeanse, ISelectedSchedule } from '@src/types';
import type { FC } from 'react';
import { SelectButton } from './UI/SelectButton';

interface ScheduleTimesProps {
	selectedSchedule: ISelectedSchedule;
	handleTimeClick: (seance: IScheduleSeanse) => void;
	hall: {
		name: string;
		seances: IScheduleSeanse[];
	};
}

export const ScheduleTimes: FC<ScheduleTimesProps> = ({
	hall,
	handleTimeClick,
	selectedSchedule,
}) => (
	<div>
		<p>{hall.name}</p>
		<div className="mt-4 flex gap-2">
			{hall.seances.map((seance) => {
				const isActive =
					selectedSchedule.seance?.hall.name === seance.hall.name &&
					selectedSchedule.seance.time === seance.time;

				return (
					<SelectButton
						key={seance.time}
						isActive={isActive}
						onClick={() => {
							handleTimeClick(seance);
						}}
					>
						{seance.time}
					</SelectButton>
				);
			})}
		</div>
	</div>
);
