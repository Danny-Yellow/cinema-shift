import type { FC, ReactNode } from 'react';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';

interface ILinkBaseProps {
	children: ReactNode;
	className?: string;
	color?: 'gray' | 'neutral';
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
	onClick,
	startIcon,
	to,
}) => {
	const variants = { color };

	const styles = cva<TVariants<typeof variants>>('flex items-center gap-4', {
		variants: {
			color: {
				gray: 'text-gray',
				neutral: 'text-neutral',
			},
		},
	});

	return (
		<RouterLink
			className={clsx(styles(variants), className)}
			to={to || ''}
			onClick={onClick}
		>
			{startIcon}
			{children}
		</RouterLink>
	);
};
