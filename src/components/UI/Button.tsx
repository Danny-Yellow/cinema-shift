import type { FC, ReactNode } from 'react';
import { cva } from 'class-variance-authority';

interface IButtonProps {
	children: ReactNode;
	size: 'full' | 'large' | 'medium';
	variant: 'contained' | 'outlined';
	onClick: () => void;
}

export const Button: FC<IButtonProps> = ({
	children,
	onClick,
	...variants
}) => {
	const styles = cva<TVariants<typeof variants>>(
		'flex h-14 items-center justify-center rounded-2xl',
		{
			variants: {
				size: {
					full: 'w-full',
					large: 'w-[432px]',
					medium: 'w-[328px]',
				},
				variant: {
					contained: 'text-white bg-primary',
					outlined: 'border-[1px] text-neutral',
				},
			},
		},
	);

	return (
		<button className={styles(variants)} onClick={onClick}>
			{children}
		</button>
	);
};
