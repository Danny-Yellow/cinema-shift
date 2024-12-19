import { OrderList } from '@src/components/OrderList';
import { useGetOrdersQuery } from '@src/store/api/cinemaApi';

export const OrderPage = () => {
	const { data, isSuccess } = useGetOrdersQuery();

	if (isSuccess) {
		return (
			<div className="mt-12">
				<h1 className="title mb-4 text-2xl">Билеты</h1>
				<OrderList orders={data?.orders} />
			</div>
		);
	}
};
