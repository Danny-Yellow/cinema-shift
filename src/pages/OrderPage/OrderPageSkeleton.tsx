import { BottomNavigation } from '@src/components/layout/navigation/BottomNavigation';
import { OrderListSkeleton } from '@src/components/pages/orderList';

export const OrderPageSkeleton = () => {
	return (
		<div className="mt-12">
			<h1 className="title mb-4 text-2xl">Билеты</h1>
			<OrderListSkeleton count={2} />
			<BottomNavigation />
		</div>
	);
};
