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
	const baseStyles = 'hover:cursor-pointer rounded-[14px] py-[10px] px-4';
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
