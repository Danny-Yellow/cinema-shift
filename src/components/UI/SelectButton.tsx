import clsx from 'clsx';
import { FC, ReactNode } from 'react';

interface ISelectButtonProps {
	children: ReactNode;
	isActive: boolean;
	onClick: () => void;
}

export const SelectButton: FC<ISelectButtonProps> = ({
	children,
	isActive,
	onClick,
}) => {
	const baseStyles = 'rounded-[14px] border-[1px] border-light px-4 py-[10px]';
	const activeStyles = 'text-white bg-medium';

	return (
		<button
			className={clsx(baseStyles, isActive && activeStyles)}
			onClick={() => {
				onClick();
			}}
		>
			{children}
		</button>
	);
};
