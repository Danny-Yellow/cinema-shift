import { OrderList } from '@src/components/pages/orderList';
import { useGetOrdersQuery } from '@src/store/api/cinemaApi';
import { closeModal, openModal } from '@src/store/features/modal/modal.slice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { EmptyOrderPage } from './EmptyOrderPage';
import { OrderPageSkeleton } from './OrderPageSkeleton';

export const OrderPage = () => {
	const { data, isLoading, isSuccess } = useGetOrdersQuery();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(closeModal());
	}, []);

	function handleReturnTicketClick(orderId: string) {
		dispatch(openModal({ data: { orderId }, name: 'ticketRefund' }));
	}

	if (isLoading) {
		return <OrderPageSkeleton />;
	}

	if (isSuccess && !data?.orders.length) {
		return <EmptyOrderPage />;
	}

	if (isSuccess) {
		const sortedOrders = [...data.orders].sort((prevOrder, order) => {
			const orderDate = new Date(order.created).getTime();
			const prevOrderDate = new Date(prevOrder.created).getTime();

			return orderDate - prevOrderDate;
		});

		return (
			<div className="mt-12">
				<h1 className="title mb-4 text-2xl">Билеты</h1>
				<OrderList
					orders={sortedOrders}
					onReturnTicketClick={handleReturnTicketClick}
				/>
			</div>
		);
	}
};
