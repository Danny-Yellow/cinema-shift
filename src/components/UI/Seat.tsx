import type { ComponentProps, FC } from 'react';
import clsx from 'clsx';
import { useState } from 'react';

interface ISeatProps extends ComponentProps<'div'> {
	col: number;
	isAvailable: boolean;
	handleClick: () => void;
}

export const Seat: FC<ISeatProps> = ({
	col,
	handleClick,
	isAvailable,
	...props
}) => {
	const [isClicked, setIsClicked] = useState(false);

	const availableStyles = 'bg-dark-primary';
	const notAvailableStyles = 'bg-light';
	const baseStyles = 'h-4 w-4 rounded-[4px] transition';

	const colIsVisible = isClicked && isAvailable;

	return (
		<div
			className={clsx(
				isAvailable ? 'cursor-pointer' : 'cursor-not-allowed',
				'group relative flex items-center justify-center text-white',
			)}
			onClick={() => {
				if (isAvailable) {
					setIsClicked((prev) => !prev);
					handleClick();
				}
			}}
			{...props}
		>
			<div
				className={clsx(
					isAvailable ? availableStyles : notAvailableStyles,
					isClicked && 'scale-[2]',
					baseStyles,
				)}
			/>
			<p
				className={clsx(
					colIsVisible ? 'opacity-100' : 'opacity-0',
					'absolute transition',
				)}
			>
				{col}
			</p>
		</div>
	);
};
