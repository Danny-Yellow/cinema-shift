import type { IFilm } from '@src/types';
import type { FC } from 'react';
import { calculateStars } from '@src/helpers/stars';
import { Rating } from './UI/Rating';

interface IFilmInfoProps {
	film: IFilm;
}

export const FilmInfo: FC<IFilmInfoProps> = ({ film }) => {
	const countOfStars = calculateStars(+film.userRatings.kinopoisk);

	return (
		<section className="flex gap-8">
			<img alt={film.name} className="h-[450px] basis-[300px]" src={film.img} />
			<div>
				<h1 className="mb-1 text-[32px] font-bold text-black">{film.name}</h1>
				<p className="mb-4 text-sm text-gray">{film.originalName}</p>
				<Rating defaultValue={countOfStars} max={5} />
				<p className="mb-4 mt-1 text-sm text-gray">
					Kinopoisk - {film.userRatings.kinopoisk}
				</p>
				<p className="text-neutral">{film.description}</p>
			</div>
		</section>
	);
};
