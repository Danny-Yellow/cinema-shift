import Skeleton from 'react-loading-skeleton';

export const OrderSkeleton = () => {
	return (
		<article className="flex w-[328px] flex-col rounded-2xl border-[1px] border-slate-200 p-4">
			<header className="mb-5 flex w-full justify-between">
				<Skeleton width={60} />
				<Skeleton width={60} />
			</header>
			<div className="mb-5 flex flex-col items-center self-center">
				<h2 className="mb-2 text-xl">
					<Skeleton width={130} />
				</h2>
				<Skeleton width={97} />
			</div>
			<div className="mb-5 flex w-full justify-between">
				<Skeleton height={20} width={90} />
				<Skeleton width={90} />
			</div>
			<Skeleton height={56} width={`100%`} />
		</article>
	);
};
