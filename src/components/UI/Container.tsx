import { FC, ReactNode } from 'react';

interface IContainerProps {
	children: ReactNode;
}

export const Container: FC<IContainerProps> = ({ children }) => {
	return (
		<div className="mx-auto max-w-[960px] md:px-8 sm:px-4">{children}</div>
	);
};
