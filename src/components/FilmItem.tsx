import type { IFilm } from '@src/types';
import type { FC } from 'react';
import { Button } from '@src/components/UI/Button';
import { Rating } from '@src/components/UI/Rating';
import { calculateStars } from '@src/helpers/stars';
import { useNavigate } from 'react-router-dom';

interface IFilmsItemProps {
	film: IFilm;
}

export const FilmItem: FC<IFilmsItemProps> = ({ film }) => {
	const navigate = useNavigate();

	const countOfStars = calculateStars(+film.userRatings.kinopoisk);

	function handleClickButton() {
		navigate(`/film/${film.id}`);
	}

	return (
		<article className="w-[300px]">
			<img
				alt={film.name}
				className="h-[360px] w-full rounded-lg object-cover"
				src={film.img}
			/>
			<h2 className="mt-4 truncate text-xl font-semibold">{film.name}</h2>
			<p className="mb-4 mt-1 truncate font-normal text-gray">
				{film.originalName}
			</p>
			<Rating defaultValue={countOfStars} max={5} />
			<p className="mb-4 mt-1 font-normal text-gray">
				Kinopoisk - {film.userRatings.kinopoisk}
			</p>
			<Button size="full" variant="contained" onClick={handleClickButton}>
				Подробнее
			</Button>
		</article>
	);
};
