import Skeleton from 'react-loading-skeleton';

export const FilmInfoSkeleton = () => {
	return (
		<>
			<section className="mb-12 flex gap-8">
				<Skeleton height={360} width={300} />
				<div className="w-full">
					<Skeleton className="mb-1" height={36} width={`80%`} />
					<Skeleton className="mb-4" height={20} width={`30%`} />
					<Skeleton className="mb-4" height={36} width={`35%`} />
					<p>
						<Skeleton count={4} />
					</p>
				</div>
			</section>
			<section>
				<h2 className="text-2xl">
					<Skeleton className="mb-6" width={`18%`} />
				</h2>

				<Skeleton height={48} width={`95%`} />
			</section>
		</>
	);
};
