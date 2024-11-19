import { cva } from 'class-variance-authority';
import { FC, ReactNode } from 'react';

interface IButtonProps {
	size: 'medium' | 'large' | 'full';
	variant: 'contained' | 'outlined';
	onClick: () => void;
	children: ReactNode;
}

export const Button: FC<IButtonProps> = ({
	onClick,
	children,
	...variants
}) => {
	const styles = cva<TVariants<typeof variants>>(
		'flex h-14 items-center justify-center rounded-2xl',
		{
			variants: {
				variant: {
					contained: 'text-white bg-primary',
					outlined: 'border-[1px] text-neutral',
				},
				size: {
					full: 'w-full',
					medium: 'w-[328px]',
					large: 'w-[432px]',
				},
			},
		},
	);

	return (
		<button onClick={onClick} className={styles(variants)}>
			{children}
		</button>
	);
};
