import type { ComponentProps, FC } from 'react';
import { upperCaseFirst } from '@src/helpers/upperCaseFirst';
import { AgeRaiting, type IFilm } from '@src/types';
import clsx from 'clsx';
import { FilmCover } from './FilmCover';
import { Rating } from './UI/Rating';

interface IFilmInfoProps extends ComponentProps<'section'> {
	film: IFilm;
}

export const FilmInfo: FC<IFilmInfoProps> = ({ className, film }) => {
	const ageRaiting = (() => {
		const ageRaitingKey = film.ageRating as string;
		return AgeRaiting[ageRaitingKey as keyof typeof AgeRaiting];
	})();

	const releaseYear = film.releaseDate.match(/\d{4}$/)?.[0] ?? null;

	return (
		<section className={clsx('flex gap-8', className)}>
			<FilmCover
				info={{
					country: film.country.name,
					genre: upperCaseFirst(film.genres[0]),
					releaseYear,
				}}
				className="w-[300px] shrink-0"
			>
				<img alt={film.name} src={film.img} />
			</FilmCover>

			<div>
				<h1 className="title mb-1 text-[32px]">
					{film.name} ({ageRaiting})
				</h1>
				<p className="mb-4 text-sm text-gray">{film.originalName}</p>
				<Rating countOfStars={5} rating={+film.userRatings.kinopoisk / 2} />
				<p className="mb-4 mt-1 text-sm text-gray">
					Kinopoisk - {film.userRatings.kinopoisk}
				</p>
				<p className="text-neutral">{film.description}</p>
			</div>
		</section>
	);
};
