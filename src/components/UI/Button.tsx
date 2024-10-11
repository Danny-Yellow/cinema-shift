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
	const styles = cva('flex h-14 items-center justify-center rounded-2xl', {
		variants: {
			variant: {
				contained: 'text-white bg-primary',
				outlined: 'border-[1px] text-neutral',
			},
			size: {
				full: 'w-full',
				medium: 'max-w-[328px]',
				large: 'max-w-[432px]',
			},
		},
	});

	return (
		<button onClick={onClick} className={styles(variants)}>
			{children}
		</button>
	);
};
