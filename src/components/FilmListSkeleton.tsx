import { FilmItemSkeleton } from './FilmItemSkeleton';

export const FilmListSkeleton = ({ count }: { count: number }) => {
	return (
		<ul className="grid grid-cols-auto-fill-300 justify-center gap-x-8 gap-y-16">
			{Array.from({ length: count }).map((_, index) => (
				<li key={index}>
					<FilmItemSkeleton />
				</li>
			))}
		</ul>
	);
};
