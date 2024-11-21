import type { ComponentProps, FC } from 'react';

export const Input: FC<ComponentProps<'input'>> = ({ onChange, ...props }) => {
	return (
		<input
			type="text"
			{...props}
			className="w-[400px] rounded-lg border-[1px] border-light p-3"
			onChange={onChange}
		/>
	);
};
