import { FC } from 'react';
import { ScheduleTimes } from './ScheduleTimes';

interface IScheduleTimesProps {
	seances: IScheduleSeanse[];
	selectedSeance: {
		hall: string;
		time: string;
	};
	handleTimeClick: (seance: { hall: string; time: string }) => void;
}

export const ScheduleAllTimes: FC<IScheduleTimesProps> = ({
	seances,
	selectedSeance,
	handleTimeClick,
}) => {
	const halls = [
		{
			name: 'Красный зал',
			seances: seances.filter((seance) => seance.hall.name === 'Red'),
		},
		{
			name: 'Зеленый зал',
			seances: seances.filter((seance) => seance.hall.name === 'Green'),
		},
		{
			name: 'Синий зал',
			seances: seances.filter((seance) => seance.hall.name === 'Blue'),
		},
	];

	return (
		<>
			{halls.map((hall) => (
				<ScheduleTimes
					hall={hall}
					selectedSeance={selectedSeance}
					handleTimeClick={handleTimeClick}
				/>
			))}
		</>
	);
};
