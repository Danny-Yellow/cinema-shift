import type { ComponentProps, FC } from 'react';

export const ModalBackground: FC<ComponentProps<'div'>> = ({
	children,
	onClick,
}) => {
	return (
		<div
			className="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-black bg-opacity-30"
			onClick={(event) => {
				if (onClick) {
					onClick(event);
					event.stopPropagation();
				}
			}}
		>
			{children}
		</div>
	);
};
