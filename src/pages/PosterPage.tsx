import { FilmList } from '@src/components/FilmList';
import { useGetFilmsQuery } from '@src/store/api/filmsApi';

export const PosterPage = () => {
	const { data, isSuccess } = useGetFilmsQuery();

	if (isSuccess) {
		return (
			<section>
				<h1 className="text-2xl font-bold text-black">Афиша</h1>
				<div className="mb-20 mt-4">
					<FilmList films={data.films} />
				</div>
			</section>
		);
	}
};
