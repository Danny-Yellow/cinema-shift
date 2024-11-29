import type { ComponentProps } from 'react';
import { FilmList } from '@src/components/FilmList';
import { useGetFilmsQuery } from '@src/store/api/api';

export const PosterPage = (props: ComponentProps<'main'>) => {
	const { data, isSuccess } = useGetFilmsQuery();

	if (isSuccess) {
		return (
			<main {...props}>
				<h1 className="mb-4 text-2xl font-bold text-black">Афиша</h1>
				<FilmList className="mb-20" films={data.films} />
			</main>
		);
	}
};
