import type { IFilm } from '@src/types';
import type { FC } from 'react';
import { FilmCover } from '@src/components/common/FilmCover';
import { Button } from '@src/components/UI/Button';
import { Rating } from '@src/components/UI/Rating';
import { upperCaseFirst } from '@src/helpers/upperCaseFirst';
import { useNavigate } from 'react-router-dom';

interface IFilmsItemProps {
	film: IFilm;
}

export const FilmItem: FC<IFilmsItemProps> = ({ film }) => {
	const navigate = useNavigate();

	function handleClickButton() {
		navigate(`/film/${film.id}`);
	}

	const releaseYear = film.releaseDate.match(/\d{4}$/)?.[0] ?? null;

	return (
		<article className="w-[300px]">
			<FilmCover
				info={{
					country: film.country.name,
					genre: upperCaseFirst(film.genres[0]),
					releaseYear,
				}}
				className=""
				img={{ alt: film.name, src: film.img }}
			/>

			<h2 className="mt-4 truncate text-xl font-semibold">{film.name}</h2>
			<p className="mb-4 mt-1 truncate font-normal text-gray">
				{film.originalName}
			</p>
			<Rating countOfStars={5} rating={+film.userRatings.kinopoisk / 2} />
			<p className="mb-4 mt-1 font-normal text-gray">
				Kinopoisk - {film.userRatings.kinopoisk}
			</p>
			<Button size="full" variant="contained" onClick={handleClickButton}>
				Подробнее
			</Button>
		</article>
	);
};
