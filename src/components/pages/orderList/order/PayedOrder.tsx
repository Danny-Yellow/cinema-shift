import type { ICinemaOrder } from '@src/types';
import type { FC } from 'react';
import { Button } from '@src/components/UI/Button';
import { SuccessOrderStatus } from '@src/components/UI/SuccessOrderStatus';
import { groupSeats } from '@src/helpers/groupSeats';
import { useGetFilmQuery } from '@src/store/api/cinemaApi';

interface IOrderProps {
	order: ICinemaOrder;
	onButtonClick: () => void;
}

export const PayedOrder: FC<IOrderProps> = ({ onButtonClick, order }) => {
	const { data } = useGetFilmQuery(order.tickets[0].filmId);

	const groupedSeats = groupSeats(order.tickets);

	return (
		<article className="flex w-[328px] flex-col rounded-2xl border-[1px] border-slate-200 p-4 text-sm">
			<header className="mb-5 flex justify-between text-medium">
				<p>{order.tickets[0].seance.date}</p>
				<p>{order.tickets[0].seance.time}</p>
			</header>
			<div className="mb-5 flex flex-col items-center self-center">
				<h2 className="title text-xl">{data?.film.name}</h2>
				{groupedSeats.map(({ cols, row }) => {
					const colMessage = cols.length > 1 ? 'места' : 'место';

					return (
						<p key={`${cols}${row}`} className="text-neutral">
							{row} ряд - {cols.join(', ')} {colMessage}
						</p>
					);
				})}
			</div>
			<div className="mb-5 flex justify-between">
				<SuccessOrderStatus />
				<p className="text-medium">Код билета {order.orderNumber}</p>
			</div>
			<Button
				className="text-base"
				size="full"
				variant="outlined"
				onClick={onButtonClick}
			>
				Вернуть билет
			</Button>
		</article>
	);
};
