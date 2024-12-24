import { FilmList } from '@src/components/FilmList';
import { FilmListSkeleton } from '@src/components/FilmListSkeleton';
import { useGetFilmsQuery } from '@src/store/api/cinemaApi';

export const PosterPage = () => {
	const { data, isLoading, isSuccess } = useGetFilmsQuery();

	return (
		<div className="mb-20 mt-12">
			<h1 className="title mb-4 text-2xl">Афиша</h1>
			{isSuccess && <FilmList films={data.films} />}
			{isLoading && <FilmListSkeleton count={6} />}
		</div>
	);
};
