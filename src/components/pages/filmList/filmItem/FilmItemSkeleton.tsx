import Skeleton from 'react-loading-skeleton';

export const FilmItemSkeleton = () => {
	return (
		<div className="w-[300px]">
			<Skeleton height={360} />
			<h2 className="mt-4 text-xl">
				<Skeleton width={`40%`} />
			</h2>
			<p className="mb-2 mt-1">
				<Skeleton width={`75%`} />
			</p>
			<Skeleton height={20} width={`50%`} />
			<p className="mb-4 mt-1">
				<Skeleton width={`35%`} />
			</p>
            <Skeleton height={56} width={`100%`}/>
		</div>
	);
};
