import type { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface IToggleButtonProps {
	children: ReactNode;
	isActive?: boolean;
	value: string;
	onClick?: (newValue: string) => void;
}

export const ToggleButton: FC<IToggleButtonProps> = ({
	children,
	isActive,
	onClick,
	value,
}) => {
	const baseStyles =
		'hover:cursor-pointer rounded-[14px] py-[10px] px-4 shrink-0';
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
