import type { FC } from 'react';
import { Question } from '@src/components/icons';
import { Button } from '@src/components/UI/Button';
import { useCancelOrderMutation } from '@src/store/api/cinemaApi';
import { closeModal } from '@src/store/features/modal/modal.slice';
import { useDispatch } from 'react-redux';

interface ITicketRefundProps {
	orderId: string;
}

export const TicketRefund: FC<ITicketRefundProps> = ({ orderId }) => {
	const [cancel] = useCancelOrderMutation();

	const dispatch = useDispatch();

	function handleReturnButtonClick() {
		cancel({ orderId });
		dispatch(closeModal());
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
