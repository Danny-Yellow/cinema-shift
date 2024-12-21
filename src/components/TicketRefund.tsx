import type { FC } from 'react';
import { useCancelOrderMutation } from '@src/store/api/cinemaApi';
import { closeModal } from '@src/store/features/modal/modal.slice';
import { useDispatch } from 'react-redux';
import { Question } from './icons';
import { Button } from './UI/Button';

interface ITicketRefundProps {
	orderId: string;
}

export const TicketRefund: FC<ITicketRefundProps> = ({ orderId }) => {
	const [cancel] = useCancelOrderMutation();

	const dispatch = useDispatch();

	function handleReturnButtonClick() {
		cancel({ orderId });
	}

	function handleCancelButtonClick() {
		dispatch(closeModal());
	}

	return (
		<div className="flex flex-col items-center">
			<Question />
			<h2 className="title mb-10 mt-4 text-xl">Вернуть билет?</h2>
			<Button
				className="mb-4"
				size="medium"
				variant="outlined"
				onClick={handleReturnButtonClick}
			>
				Вернуть
			</Button>
			<Button
				size="medium"
				variant="contained"
				onClick={handleCancelButtonClick}
			>
				Отменить
			</Button>
		</div>
	);
};
