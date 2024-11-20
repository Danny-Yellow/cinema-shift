import type { ComponentProps, FC } from 'react';

export const IconButton: FC<ComponentProps<'button'>> = ({
	children,
	onClick,
}) => {
	return <button onClick={onClick}>{children}</button>;
};
