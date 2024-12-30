import type { ComponentProps, FC } from 'react';

export const IconButton: FC<ComponentProps<'button'>> = ({
	children,
	className,
	onClick,
}) => {
	return (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	);
};
