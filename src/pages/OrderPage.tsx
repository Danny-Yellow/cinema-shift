import { OrderList } from '@src/components/OrderList';
import { useGetOrdersQuery } from '@src/store/api/cinemaApi';
import { closeModal, openModal } from '@src/store/features/modal/modal.slice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const OrderPage = () => {
	const { data, isSuccess } = useGetOrdersQuery();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(closeModal());
	}, []);

	function handleReturnTicketClick() {
		dispatch(openModal({ name: 'ticketRefund' }));
	}

	if (isSuccess) {
		return (
			<div className="mt-12">
				<h1 className="title mb-4 text-2xl">Билеты</h1>
				<OrderList
					orders={data?.orders}
					onReturnTicketClick={handleReturnTicketClick}
				/>
			</div>
		);
	}
};
