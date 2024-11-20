import { closeModal } from '@src/store/features/modal/modal.slice';
import { getModal } from '@src/store/features/modal/selectors/getModal';
import { useDispatch, useSelector } from 'react-redux';
import { ModalBackground } from './ModalBackground';
import { ModalContent } from './ModalContent';

export const ModalManager = () => {
	const modal = useSelector(getModal);
	const dispatch = useDispatch();

	function handleCloseModal() {
		dispatch(closeModal());
	}

	if (modal.name) {
		return (
			<ModalBackground onClick={handleCloseModal}>
				<ModalContent onCloseButtonClick={handleCloseModal}>
					Content
				</ModalContent>
			</ModalBackground>
		);
	}
};
