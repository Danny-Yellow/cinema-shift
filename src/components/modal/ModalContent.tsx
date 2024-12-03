import type { FC, MouseEvent, ReactNode } from 'react';
import { Cross } from '../icons';
import { IconButton } from '../UI/IconButton';

interface IModalContent {
	children: ReactNode;
	onCloseButtonClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const ModalContent: FC<IModalContent> = ({
	children,
	onCloseButtonClick,
}) => {
	return (
		<div
			className="rounded-3xl bg-white w-[544px]"
			onClick={(event) => {
				event.stopPropagation();
			}}
		>
			<header className="flex justify-end px-6 pt-5">
				<IconButton onClick={(event) => onCloseButtonClick(event)}>
					<Cross />
				</IconButton>
			</header>
			<div className="px-[72px] pb-[72px]">{children}</div>
		</div>
	);
};
