import type { FC, ReactNode } from 'react';
import { Cross } from '../icons';
import { IconButton } from '../UI/IconButton';

interface IModalContent {
	children: ReactNode;
	onCloseButtonClick: () => void;
}

export const ModalContent: FC<IModalContent> = ({
	children,
	onCloseButtonClick,
}) => {
	return (
		<div className="rounded-3xl bg-white">
			<header className="flex justify-end px-6 pt-5">
				<IconButton onClick={onCloseButtonClick}>
					<Cross />
				</IconButton>
			</header>
			<div className="px-[72px]">{children}</div>
		</div>
	);
};
