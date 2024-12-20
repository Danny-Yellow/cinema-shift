import { closeModal } from '@src/store/features/modal/modal.slice';
import { useDispatch } from 'react-redux';
import { Question } from './icons';
import { Button } from './UI/Button';

export const TicketRefund = () => {
	const dispatch = useDispatch();

	function handleReturnButtonClick() {}

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
