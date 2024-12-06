import type { ComponentProps, FC } from 'react';
import clsx from 'clsx';

interface IInputProps extends ComponentProps<'input'> {
	hasError?: boolean;
}

export const Input: FC<IInputProps> = ({
	className,
	hasError,
	name,
	onChange,
	value,
	...props
}) => {
	return (
		<input
			type="text"
			{...props}
			className={clsx(
				hasError ? 'border-red-500' : 'border-light',
				'w-full rounded-lg border-[1px] p-3',
				className,
			)}
			value={value}
			onChange={onChange}
		/>
	);
};
