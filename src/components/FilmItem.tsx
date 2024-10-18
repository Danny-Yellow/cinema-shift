import { FC } from 'react';
import { Rating } from '@src/components/UI/Rating';
import { Button } from '@src/components/UI/Button';
import { useNavigate } from 'react-router-dom';
import { calculateStars } from '@src/helpers/stars';

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
				className="h-[360px] w-full rounded-lg object-cover"
				alt={film.name}
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
