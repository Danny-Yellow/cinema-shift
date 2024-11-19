import { FC } from 'react';
import { Rating } from './UI/Rating';
import { calculateStars } from '@src/helpers/stars';
import { IFilm } from '@src/types';

interface IFilmInfoProps {
	film: IFilm;
}

export const FilmInfo: FC<IFilmInfoProps> = ({ film }) => {
	const countOfStars = calculateStars(+film.userRatings.kinopoisk);

	return (
		<section className="flex gap-8">
			<img src={film.img} alt={film.name} className="h-[450px] basis-[300px]" />
			<div>
				<h1 className="mb-1 text-[32px] font-bold text-black">{film.name}</h1>
				<p className="mb-4 text-sm text-gray">{film.originalName}</p>
				<Rating max={5} defaultValue={countOfStars} />
				<p className="mb-4 mt-1 text-sm text-gray">
					Kinopoisk - {film.userRatings.kinopoisk}
				</p>
				<p className="text-neutral">{film.description}</p>
			</div>
		</section>
	);
};
