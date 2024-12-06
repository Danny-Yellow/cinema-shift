import type { ComponentProps, FC } from 'react';
import clsx from 'clsx';
import { Input } from './Input';

interface ITextField extends ComponentProps<'input'> {
	error?: string;
	label?: string;
	value: string;
}

export const TextField: FC<ITextField> = ({
	className,
	error,
	label,
	onChange,
	value,
	...props
}) => {
	const hasError = Boolean(error);

	return (
		<div className={className}>
			{label && <p className="mb-[6px] text-sm">{label}</p>}
			<Input
				onChange={onChange}
				{...props}
				hasError={hasError}
				name={label}
				value={value}
			/>
			{!!error && <p className={clsx(hasError && 'text-red-500')}>{error}</p>}
		</div>
	);
};
