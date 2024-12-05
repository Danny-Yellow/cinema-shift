import type { IScheduleSeanse, ISelectedSeat } from '@src/types';
import type { ComponentProps, FC } from 'react';
import { openModal } from '@src/store/features/modal/modal.slice';
import { selectSeat } from '@src/store/features/schedule/scheduleSelection.slice';
import { getSelectedSeats } from '@src/store/features/schedule/selectors/selectedSeats';
import { useDispatch, useSelector } from 'react-redux';
import { Seats } from './Seats';
import { TicketPurchase } from './TicketPurchase';

interface ISeatSelectionProps extends ComponentProps<'section'> {
	schedule: {
		date: string;
		seance: IScheduleSeanse;
	};
}

export const SeatSelection: FC<ISeatSelectionProps> = ({
	className,
	schedule,
}) => {
	const dispatch = useDispatch();
	const selectedSeats = useSelector(getSelectedSeats);

	function handleSeatClick(seat: ISelectedSeat) {
		dispatch(selectSeat(seat));
	}

	function handleBuyButtonClick() {
		dispatch(openModal({ name: 'personalDataForm' }));
	}

	return (
		<section className={className}>
			<h2 className="title mb-6 text-2xl">Выбор места</h2>
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
					<TicketPurchase
						schedule={schedule}
						selectedSeats={selectedSeats}
						onButtonClick={handleBuyButtonClick}
					/>
				)}
			</div>
		</section>
	);
};
