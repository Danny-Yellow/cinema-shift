import type { FC, ReactNode } from 'react';

interface ILabelProps {
	children: ReactNode;
	name: string;
}

export const Label: FC<ILabelProps> = ({ children, name }) => {
	return (
		<label>
			<p className="mb-[2px] text-xs text-gray">{name}</p>
			{children}
		</label>
	);
};
