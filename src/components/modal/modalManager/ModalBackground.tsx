import { type ComponentProps, type FC, useRef } from 'react';

export const ModalBackground: FC<ComponentProps<'div'>> = ({
	children,
	onClick,
}) => {
	const isMouseDownInside = useRef(false);

	return (
		<div
			className="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-black bg-opacity-30"
			onMouseDown={(event) => {
				isMouseDownInside.current = event.target !== event.currentTarget;
			}}
			onMouseUp={(event) => {
				if (!isMouseDownInside.current && onClick) {
					onClick(event);
				}
			}}
		>
			{children}
		</div>
	);
};
