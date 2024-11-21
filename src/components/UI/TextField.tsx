import type { ComponentProps, FC } from 'react';
import { Input } from './Input';

interface ITextField extends ComponentProps<'input'> {
	label: string;
}

export const TextField: FC<ITextField> = ({ label, onChange, ...props }) => {
	return (
		<div>
			<p className="mb-[6px] text-sm">{label}</p>
			<Input onChange={onChange} {...props} />
		</div>
	);
};
