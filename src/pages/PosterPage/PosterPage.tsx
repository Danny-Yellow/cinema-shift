import { BottomNavigation } from '@src/components/layout/navigation/BottomNavigation';
import { FilmList } from '@src/components/pages/filmList';
import { useGetFilmsQuery } from '@src/store/api/cinemaApi';
import { PosterPageSkeleton } from './PosterPageSkeleton';

export const PosterPage = () => {
	const { data, isLoading, isSuccess } = useGetFilmsQuery();

	if (isLoading) {
		<PosterPageSkeleton />;
	}

	if (isSuccess) {
		return (
			<div className="mb-12 mt-12 sm:mt-3">
				<h1 className="title mb-4 text-2xl">Афиша</h1>
				<FilmList films={data.films} />
				<BottomNavigation />
			</div>
		);
	}
};
