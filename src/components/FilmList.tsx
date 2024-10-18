import { FC } from 'react';
import { FilmItem } from '@src/components/FilmItem';

interface IFilmListProps {
	films: IFilm[];
}

export const FilmList: FC<IFilmListProps> = ({ films }) => {
	return (
		<ul className="grid grid-cols-auto-fill-300 justify-center gap-x-8 gap-y-16">
			{films.map((film) => (
				<li key={film.id}>
					<FilmItem film={film} />
				</li>
			))}
		</ul>
	);
};
