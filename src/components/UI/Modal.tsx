import { FC, ReactNode } from 'react';

interface IModalProps {
	children: ReactNode;
}

export const Modal: FC<IModalProps> = ({ children }) => {
	return (
		<div>
			<div></div>
		</div>
	);
};
