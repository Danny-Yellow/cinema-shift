import { OrderSkeleton } from './order/OrderSkeleton';

export const OrderListSkeleton = ({ count }: { count: number }) => {
	return (
		<ul className="flex flex-col gap-6">
			{Array.from({ length: count }).map((_, index) => (
				<li key={index}>
					<OrderSkeleton />
				</li>
			))}
		</ul>
	);
};
