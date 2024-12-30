import { BottomNavigation } from '@src/components/layout/navigation/BottomNavigation';
import { FilmListSkeleton } from '@src/components/pages/filmList';

export const PosterPageSkeleton = () => {
	return (
		<div className="mb-20 mt-12">
			<h1 className="title mb-4 text-2xl">Афиша</h1>
			<FilmListSkeleton count={6} />
			<BottomNavigation />
		</div>
	);
};
