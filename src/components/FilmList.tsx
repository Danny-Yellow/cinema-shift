import type { IFilm } from '@src/types';
import type { ComponentProps, FC } from 'react';
import { FilmItem } from '@src/components/FilmItem';
import clsx from 'clsx';

interface IFilmListProps extends ComponentProps<'ul'> {
	films: IFilm[];
}

export const FilmList: FC<IFilmListProps> = ({ className, films }) => {
	return (
		<ul
			className={clsx(
				'grid grid-cols-auto-fill-300 justify-center gap-x-8 gap-y-16',
				className,
			)}
		>
			{films.map((film) => (
				<li key={film.id}>
					<FilmItem film={film} />
				</li>
			))}
		</ul>
	);
};
