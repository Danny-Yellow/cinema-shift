import type { IScheduleSeanse } from '@src/types';
import type { FC } from 'react';
import { HallName } from '@src/types';
import { Button } from './UI/Button';

interface ITicketPurchaseProps {
	selectedSeats: ISelectedSeat[];
	schedule: {
		date: string;
		seance: IScheduleSeanse;
	};
}

export const TicketPurchase: FC<ITicketPurchaseProps> = ({
	schedule,
	selectedSeats,
}) => {
	const groupedSeats = (() => {
		const seatMap = new Map<number, number[]>();

		selectedSeats.forEach(({ col, row }) => {
			if (!seatMap.has(row)) {
				seatMap.set(row, []);
			}
			seatMap.get(row)!.push(col);
		});

		return Array.from(seatMap.entries())
			.map(([row, cols]) => ({ cols: cols.sort((a, b) => a - b), row }))
			.sort((a, b) => a.row - b.row);
	})();

	const totalPrice = selectedSeats.reduce((acc, seat) => {
		return (acc += seat.price);
	}, 0);

	const hallName = (() => {
		const hallKey = schedule.seance.hall.name as string;
		return HallName[hallKey as keyof typeof HallName];
	})();

	return (
		<div className="flex flex-col gap-6">
			<div>
				<p className="text-xs text-gray">Зал</p>
				<p className="text-base">{hallName}</p>
			</div>
			<div>
				<p className="text-xs text-gray">Дата и время</p>
				<p className="text-base">
					{schedule.date} {schedule.seance.time}
				</p>
			</div>
			<div>
				<p className="text-xs text-gray">Места</p>
				{groupedSeats.map(({ cols, row }) => (
					<p key={row} className="text-base">
						{row} ряд - {cols.join(', ')}
					</p>
				))}
			</div>
			<strong className="text-xl font-semibold">Сумма: {totalPrice} ₽</strong>
			<Button size="large" variant="contained" onClick={() => {}}>
				Купить
			</Button>
		</div>
	);
};
