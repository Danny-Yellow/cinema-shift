import type { ICinemaOrder } from '@src/types';
import type { FC } from 'react';
import { Order } from './Order';

interface IOrderListProps {
	orders: ICinemaOrder[];
	onReturnTicketClick: () => void;
}

export const OrderList: FC<IOrderListProps> = ({
	onReturnTicketClick,
	orders,
}) => {
	return (
		<ul className="flex flex-col gap-6">
			{orders.map((order) => (
				<li key={order.orderNumber}>
					<Order order={order} onButtonClick={onReturnTicketClick} />
				</li>
			))}
		</ul>
	);
};
