import clsx from 'clsx';
import { FC, ReactNode } from 'react';

interface IToggleButtonProps {
	value: string;
	isActive?: boolean;
	onClick?: (newValue: string) => void;
	children: ReactNode;
}

export const ToggleButton: FC<IToggleButtonProps> = ({
	isActive,
	value,
	onClick,
	children,
}) => {
	const baseStyles =
		'w-[95px] text-center hover:cursor-pointer h-full flex items-center justify-center rounded-[14px]';
	const activeStyles = 'bg-white text-black';

	return (
		<div
			className={clsx(baseStyles, isActive && activeStyles)}
			onClick={() => {
				onClick?.(value);
			}}
		>
			{children}
		</div>
	);
};
