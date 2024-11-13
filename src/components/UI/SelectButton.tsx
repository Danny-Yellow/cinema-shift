import clsx from 'clsx';
import { FC, ReactNode } from 'react';

interface ISelectButtonProps {
	children: ReactNode;
	value: string;
	activeValue: string;
	onClick: (value?: string) => void;
}

export const SelectButton: FC<ISelectButtonProps> = ({
	children,
	value,
	activeValue,
	onClick,
}) => {
	const baseStyles = 'rounded-[14px] border-[1px] border-light px-4 py-[10px]';
	const activeStyles = 'text-white bg-medium';

	console.log(value, activeValue);

	const isActive = value === activeValue;

	return (
		<button
			className={clsx(baseStyles, isActive && activeStyles)}
			onClick={() => {
				onClick(value);
			}}
		>
			{children}
		</button>
	);
};
