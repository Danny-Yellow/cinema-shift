import type { IScheduleSeanse } from '@src/types';
import type { FC } from 'react';
import { selectSeat } from '@src/store/features/schedule/scheduleForm.slice';
import { getSelectedSeats } from '@src/store/features/schedule/selectors/selectedSeats';
import { useDispatch, useSelector } from 'react-redux';
import { Seats } from './Seats';
import { TicketPurchase } from './TicketPurchase';

interface ISeatSelectionProps {
	schedule: {
		date: string;
		seance: IScheduleSeanse;
	};
}

export const SeatSelection: FC<ISeatSelectionProps> = ({ schedule }) => {
	const dispatch = useDispatch();
	const selectedSeats = useSelector(getSelectedSeats);

	function handleSeatClick(seat: ISelectedSeat) {
		dispatch(selectSeat(seat));
	}

	return (
		<section>
			<h2 className="mb-6 text-2xl font-bold text-black">Выбор места</h2>
			<div className="flex flex-wrap items-center gap-20">
				<div className="flex flex-col items-center">
					<span>Экран</span>
					<div className="mb-6 mt-2 h-1 w-[410px] bg-light"></div>
					<div>
						<p className="mb-6">Ряд</p>
						<Seats
							handleClick={handleSeatClick}
							places={schedule.seance.hall.places}
						/>
					</div>
				</div>
				{!!selectedSeats.length && (
					<div>
						<TicketPurchase schedule={schedule} selectedSeats={selectedSeats} />
					</div>
				)}
			</div>
		</section>
	);
};
