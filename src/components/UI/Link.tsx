import { cva } from 'class-variance-authority';
import { FC, ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface ILinkBaseProps {
	color?: 'neutral' | 'gray';
	startIcon?: ReactNode;
	children: ReactNode;
}

type TLinkWithTo = ILinkBaseProps & {
	to: string;
	onClick?: never;
};

type TLinkWithOnClick = ILinkBaseProps & {
	onClick: () => void;
	to?: never;
};

type TLinkProps = TLinkWithTo | TLinkWithOnClick;

export const Link: FC<TLinkProps> = ({
	to,
	onClick,
	startIcon,
	children,
	color = 'neutral',
}) => {
	const variants = { color };

	const styles = cva<TVariants<typeof variants>>(
		'flex items-center gap-4 hover:underline',
		{
			variants: {
				color: {
					gray: 'text-gray',
					neutral: 'text-neutral',
				},
			},
		},
	);

	return (
		<RouterLink
			className={styles(variants)}
			to={to ? to : ''}
			onClick={onClick}
		>
			{startIcon}
			{children}
		</RouterLink>
	);
};
