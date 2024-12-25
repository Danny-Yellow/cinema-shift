import type { FC, ReactNode } from 'react';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';

interface ILinkBaseProps {
	children: ReactNode;
	className?: string;
	color?: 'gray' | 'neutral';
	isActive?: boolean;
	startIcon?: ReactNode;
}

type TLinkWithTo = ILinkBaseProps & {
	onClick?: never;
	to: string;
};

type TLinkWithOnClick = ILinkBaseProps & {
	onClick: () => void;
	to?: never;
};

type TLinkProps = TLinkWithOnClick | TLinkWithTo;

export const Link: FC<TLinkProps> = ({
	children,
	className,
	color = 'neutral',
	isActive,
	onClick,
	startIcon,
	to,
}) => {
	const variants = { color };

	const styles = cva<TVariants<typeof variants>>(
		'flex items-center gap-4 hover:text-primary transition-all',
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
			className={clsx(styles(variants), isActive && 'text-primary', className)}
			to={to || ''}
			onClick={onClick}
		>
			{startIcon}
			{children}
		</RouterLink>
	);
};
