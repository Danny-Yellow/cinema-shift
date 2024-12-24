import { OrderList } from '@src/components/OrderList';
import { OrderListSkeleton } from '@src/components/OrderListSkeleton';
import { useGetOrdersQuery } from '@src/store/api/cinemaApi';
import { closeModal, openModal } from '@src/store/features/modal/modal.slice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

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
		return (
			<div className="mt-12">
				<h1 className="title mb-4 text-2xl">Билеты</h1>
				<OrderListSkeleton count={3} />
			</div>
		);
	}

	if (isSuccess && !data?.orders.length) {
		return (
			<div className="mt-12">
				<h1 className="title mb-4 text-2xl">Билеты</h1>
				<div className="mt-12 flex justify-center">
					<div className="flex flex-col items-center">
						<h3 className="title text-xl">У вас пока нет билетов</h3>
						<p>Закажите билет на главной странице</p>
					</div>
				</div>
			</div>
		);
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
