import clsx from 'clsx';
import { type ComponentProps, type FC, useState } from 'react';

interface IFilmCoverProps extends ComponentProps<'div'> {
	img: {
		alt: string;
		src: string;
	};
	info: {
		country: string;
		genre: string;
		releaseYear: string | null;
	};
}

export const FilmCover: FC<IFilmCoverProps> = ({ className, img, info }) => {
	const [isLoad, setIsLoad] = useState(false);

	return (
		<div
			className={clsx(
				'relative overflow-hidden rounded-lg align-middle text-sm transition-opacity',
				isLoad ? 'opacity-100' : 'opacity-0',
				className,
			)}
		>
			<div>
				<img
					alt={img.alt}
					className="h-[360px] w-full object-cover"
					src={img.src}
					onLoad={() => setIsLoad(true)}
				/>
			</div>
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
