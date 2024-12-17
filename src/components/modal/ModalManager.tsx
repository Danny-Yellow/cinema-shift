import { closeModal } from '@src/store/features/modal/modal.slice';
import { getModal } from '@src/store/features/modal/selectors/getModal';
import { useDispatch, useSelector } from 'react-redux';
import { PersonalDataForm } from '../PersonalDataForm';
import { SuccessPayment } from '../SuccessPayment';
import { ModalBackground } from './ModalBackground';
import { ModalContent } from './ModalContent';

export const ModalManager = () => {
	const modal = useSelector(getModal);
	const dispatch = useDispatch();

	const MODAL_MAP = {
		personalDataForm: <PersonalDataForm className="mt-6" />,
		successPayment: modal.data ? <SuccessPayment order={modal.data} /> : null,
	};

	function handleCloseModal() {
		dispatch(closeModal());
	}

	if (modal.name) {
		return (
			<ModalBackground onClick={handleCloseModal}>
				<ModalContent onCloseButtonClick={handleCloseModal}>
					{MODAL_MAP[modal.name]}
				</ModalContent>
			</ModalBackground>
		);
	}
};
