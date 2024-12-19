import type { ICinemaOrder } from '@src/types';
import type { FC } from 'react';
import { Order } from './Order';

interface IOrderListProps {
	orders: ICinemaOrder[];
}

export const OrderList: FC<IOrderListProps> = ({ orders }) => {
	return (
		<ul className="flex flex-col gap-6">
			{orders.map((order) => (
				<li key={order.orderNumber}>
					<Order order={order} />
				</li>
			))}
		</ul>
	);
};
