import type { ComponentProps, FC, ReactNode } from 'react';
import clsx from 'clsx';

interface IFilmCoverProps extends ComponentProps<'div'> {
	children: ReactNode;
	info: {
		country: string;
		genre: string;
		releaseYear: string | null;
	};
}

export const FilmCover: FC<IFilmCoverProps> = ({
	children,
	className,
	info,
}) => {
	return (
		<div
			className={clsx(
				'relative overflow-hidden rounded-lg align-middle text-sm',
				className,
			)}
		>
			<div>{children}</div>
			<div className="absolute bottom-0 right-0 flex flex-col items-center rounded-lg bg-light px-4 py-2">
				<p className="font-semibold">{info.genre}</p>
				<p>
					{info.country}
					{info.releaseYear && `, ${info.releaseYear}`}
				</p>
			</div>
		</div>
	);
};
