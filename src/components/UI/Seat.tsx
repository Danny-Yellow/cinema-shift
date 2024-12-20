import type { FC} from 'react';
import clsx from 'clsx';
import { useState } from 'react';

interface ISeatProps {
	col: number;
	isAvailable: boolean;
	handleClick: () => void;
}

export const Seat: FC<ISeatProps> = ({ col, handleClick, isAvailable }) => {
	const [isHover, setIsHover] = useState(false);

	const availableStyles = 'bg-dark-primary group-hover:scale-[2.5]';
	const notAvailableStyles = 'bg-light';
	const baseStyles = 'h-4 w-4 rounded-[4px] transition';

	const colIsVisible = isHover && isAvailable;

	return (
		<div
			className={clsx(
				isAvailable && 'cursor-pointer',
				'group relative flex items-center justify-center text-white',
			)}
			onClick={() => {
				if (isAvailable) handleClick();
			}}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<div
				className={clsx(
					isAvailable ? availableStyles : notAvailableStyles,
					baseStyles,
				)}
			/>
			{isAvailable && (
				<p
					className={clsx(
						colIsVisible ? 'opacity-100' : 'opacity-0',
						'absolute transition',
					)}
				>
					{col}
				</p>
			)}
		</div>
	);
};
