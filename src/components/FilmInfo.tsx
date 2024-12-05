import type { ComponentProps, FC } from 'react';
import { calculateStars } from '@src/helpers/index';
import { AgeRaiting, type IFilm } from '@src/types';
import clsx from 'clsx';
import { Rating } from './UI/Rating';

interface IFilmInfoProps extends ComponentProps<'section'> {
	film: IFilm;
}

export const FilmInfo: FC<IFilmInfoProps> = ({ className, film }) => {
	const countOfStars = calculateStars(+film.userRatings.kinopoisk);

	const ageRaiting = (() => {
		const ageRaitingKey = film.ageRating as string;
		return AgeRaiting[ageRaitingKey as keyof typeof AgeRaiting];
	})();

	return (
		<section className={clsx('flex gap-8', className)}>
			<img
				alt={film.name}
				className="w-[300px] shrink-0"
				src={film.img}
			/>
			<div>
				<h1 className="mb-1 text-[32px] title">
					{film.name} ({ageRaiting})
				</h1>
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
