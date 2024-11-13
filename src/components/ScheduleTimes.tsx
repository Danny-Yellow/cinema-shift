import { FC } from 'react';
import { SelectButton } from './UI/SelectButton';

interface ScheduleTimesProps {
	hall: {
		name: string;
		seances: IScheduleSeanse[];
	};
	selectedSeance: {
		hall: string;
		time: string;
	};
	handleTimeClick: (seance: { hall: string; time: string }) => void;
}

export const ScheduleTimes: FC<ScheduleTimesProps> = ({
	hall,
	selectedSeance,
	handleTimeClick,
}) => {
	return (
		<>
			<p>{hall.name}</p>
			<div className="mt-4 flex gap-2">
				{hall.seances.map((seance) => {
					return (
						<SelectButton
							value={seance.hall.name + seance.time}
							activeValue={selectedSeance.hall + selectedSeance.time}
							onClick={() => {
								handleTimeClick({ hall: seance.hall.name, time: seance.time });
							}}
						>
							{seance.time}
						</SelectButton>
					);
				})}
			</div>
		</>
	);
};
