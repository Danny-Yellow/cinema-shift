import type { IFilm } from '@src/types';
import type { ComponentProps, FC } from 'react';
import { FilmItem } from './filmItem/FilmItem';

interface IFilmListProps extends ComponentProps<'ul'> {
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
