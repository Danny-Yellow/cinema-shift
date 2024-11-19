import clsx from 'clsx';
import { FC, useState } from 'react';

interface ISeatProps {
	isAvailable: boolean;
	col: number;
	handleClick: () => void;
}

export const Seat: FC<ISeatProps> = ({ isAvailable, col, handleClick }) => {
	const [colIsShown, setColIsShown] = useState(false);

	const availableStyles =
		'bg-dark-primary group-hover:scale-[2.5] hover:cursor-pointer';
	const notAvailableStyles = 'bg-light';
	const baseStyles = 'h-4 w-4 rounded-[4px]';

	return (
		<div
			className="group relative flex items-center justify-center text-white"
			onClick={() => {
				handleClick();
			}}
			onMouseEnter={() => {
				setColIsShown(true);
			}}
			onMouseLeave={() => setColIsShown(false)}
		>
			<div
				className={clsx(
					isAvailable ? availableStyles : notAvailableStyles,
					baseStyles,
				)}
			/>
			<p className="absolute hover:cursor-pointer">
				{colIsShown && isAvailable && col}
			</p>
		</div>
	);
};
