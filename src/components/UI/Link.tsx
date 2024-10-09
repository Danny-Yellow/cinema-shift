import { FC, ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface ILinkProps {
	startIcon?: ReactNode;
	children: ReactNode;
}

export const Link: FC<ILinkProps> = ({ startIcon, children }) => {
	return (
		<RouterLink className="flex items-center gap-4 hover:underline" to="/">
			{startIcon}
			{children}
		</RouterLink>
	);
};
