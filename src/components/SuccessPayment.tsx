import type { IPaymentResponse } from '@src/types';
import type { FC } from 'react';
import { ROUTES } from '@src/constants/routes';
import { groupSeats } from '@src/helpers/groupSeats';
import { Success } from './icons';
import { Label } from './UI/Label';
import { Link } from './UI/Link';

interface ISuccessPaymentProps {
	order: IPaymentResponse['order'];
}

export const SuccessPayment: FC<ISuccessPaymentProps> = ({ order }) => {
	const ticket = order.tickets[0];

  const groupedSeats = groupSeats(order.tickets)

	return (
		<div className="flex flex-col items-center">
			<Success />
			<h1 className="title mb-6 text-2xl">Оплата прошла успешно</h1>
			<div className="mb-6 flex flex-col gap-4 self-start">
				<Label name="Номер билета">{order.orderNumber}</Label>
				<Label name="Фильм">{order.filmName}</Label>
				<Label name="Дата и время">
					{ticket.seance.date} {ticket.seance.time}
				</Label>
				<Label name="Места">
					{groupedSeats.map(({ cols, row }) => (
						<p key={row} className="text-base">
							{row} ряд - {cols.join(', ')}
						</p>
					))}
				</Label>
				<p className="text-sm text-medium">
					Вся информация продублирована в SMS
				</p>
			</div>
			<Link className="underline" to={ROUTES.TICKETS}>
				Перейти в личный кабинет
			</Link>
		</div>
	);
};
