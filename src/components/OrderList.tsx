import type { ICinemaOrder } from '@src/types';
import type { FC } from 'react';
import { CanceledOrder } from './CanceledOrder';
import { PayedOrder } from './PayedOrder';

interface IOrderListProps {
	orders: ICinemaOrder[];
	onReturnTicketClick: (orderId: string) => void;
}

export const OrderList: FC<IOrderListProps> = ({
	onReturnTicketClick,
	orders,
}) => {
	const sortedOrders = [...orders].sort((prevOrder, order) => {
		const orderDate = new Date(order.created).getTime();
		const prevOrderDate = new Date(prevOrder.created).getTime();

		return orderDate - prevOrderDate;
	});

	return (
		<ul className="flex flex-col gap-6">
			{sortedOrders.map((order) => (
				<li key={order.orderNumber}>
					{order.status === 'PAYED' && (
						<PayedOrder
							order={order}
							onButtonClick={() => onReturnTicketClick(order._id)}
						/>
					)}

					{order.status === 'CANCELED' && (
						<CanceledOrder orderNumber={order.orderNumber} />
					)}
				</li>
			))}
		</ul>
	);
};
