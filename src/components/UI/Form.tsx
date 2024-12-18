import type { ComponentProps, FC } from 'react';
import clsx from 'clsx';

export const Form: FC<ComponentProps<'form'> > = ({ children, className }) => {
	return (
		<form className={clsx('flex flex-col gap-6', className)}>{children}</form>
	);
};
