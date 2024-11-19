import { FC } from 'react';
import { SelectButton } from './UI/SelectButton';

interface ScheduleTimesProps {
	hall: {
		name: string;
		seances: IScheduleSeanse[];
	};
	selectedSchedule: ISelectedSchedule;
	handleTimeClick: (seance: IScheduleSeanse) => void;
}

export const ScheduleTimes: FC<ScheduleTimesProps> = ({
	hall,
	selectedSchedule,
	handleTimeClick,
}) => {
	return (
		<div>
			<p>{hall.name}</p>
			<div className="mt-4 flex gap-2">
				{hall.seances.map((seance) => {
					const isActive =
						selectedSchedule.seance?.hall.name === seance.hall.name &&
						selectedSchedule.seance.time === seance.time;

					return (
						<SelectButton
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
};
