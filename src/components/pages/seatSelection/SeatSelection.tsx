import type { IScheduleSeanse, ISelectedSeat } from '@src/types';
import { Tooltip } from '@src/components/UI/Tooltip';
import { openModal } from '@src/store/features/modal/modal.slice';
import { selectSeat } from '@src/store/features/schedule/scheduleSelection.slice';
import { getSelectedSeats } from '@src/store/features/schedule/selectors/selectedSeats';
import { type ComponentProps, type FC, useState } from 'react';
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
	const [tooltipParams, setTooltipParams] = useState({
		coordinates: { x: 0, y: 0 },
		isVisible: false,
		price: 0,
		seat: { column: 0, row: 0 },
	});

	const dispatch = useDispatch();
	const selectedSeats = useSelector(getSelectedSeats);

	function handleSeatClick(seat: ISelectedSeat) {
		dispatch(selectSeat(seat));
	}

	function handleBuyButtonClick() {
		dispatch(openModal({ name: 'personalDataForm' }));
	}

	function handleMouseEnterSeat(
		coordinates: { x: number; y: number },
		seat: { column: number; row: number },
		price: number,
	) {
		setTooltipParams({
			coordinates,
			isVisible: true,
			price,
			seat,
		});
	}

	function handleMouseLeaveSeat() {
		setTooltipParams({
			coordinates: { x: 0, y: 0 },
			isVisible: false,
			price: 0,
			seat: { column: 0, row: 0 },
		});
	}

	return (
		<section className={className}>
			<Tooltip
				isVisible={tooltipParams.isVisible}
				position={tooltipParams.coordinates}
				title={`${tooltipParams.price} ₽`}
			>
				{tooltipParams.seat.row} ряд, {tooltipParams.seat.column} место
			</Tooltip>
			<h2 className="title mb-6 text-2xl">Выбор места</h2>
			<div className="flex flex-wrap items-center gap-20">
				<div className="flex flex-col overflow-auto">
					<span className='mx-auto'>Экран</span>
					<div className="mb-6 mt-2 h-1 w-[410px] bg-light"></div>
					<div className='p-2'>
						<p className="mb-6">Ряд</p>
						<Seats
							places={schedule.seance.hall.places}
							onClick={handleSeatClick}
							onMouseEnter={handleMouseEnterSeat}
							onMouseLeave={handleMouseLeaveSeat}
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
