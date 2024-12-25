import type { ICinemaOrder } from '@src/types';
import type { FC } from 'react';
import { CanceledOrder } from './order/CanceledOrder';
import { PayedOrder } from './order/PayedOrder';

interface IOrderListProps {
	orders: ICinemaOrder[];
	onReturnTicketClick: (orderId: string) => void;
}

export const OrderList: FC<IOrderListProps> = ({
	onReturnTicketClick,
	orders,
}) => {
	return (
		<ul className="flex flex-col gap-6">
			{orders.map((order) => (
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
