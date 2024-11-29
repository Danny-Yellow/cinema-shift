import type { ComponentProps, FC } from 'react';
import { cva } from 'class-variance-authority';

interface IButtonProps extends ComponentProps<'button'> {
	size: 'full' | 'large' | 'medium';
	variant: 'contained' | 'outlined';
}

export const Button: FC<IButtonProps> = ({
	children,
	onClick,
	size,
	variant,
}) => {
	const variants = { size, variant };

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
		<button className={styles(variants)} onClick={(event) => onClick?.(event)}>
			{children}
		</button>
	);
};
