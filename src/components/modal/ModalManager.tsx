import { closeModal } from '@src/store/features/modal/modal.slice';
import { getModal } from '@src/store/features/modal/selectors/getModal';
import { useDispatch, useSelector } from 'react-redux';
import { ModalBackground } from './ModalBackground';
import { ModalContent } from './ModalContent';
import { PersonalDataForm } from './PersonalDataForm';

export const ModalManager = () => {
	const modal = useSelector(getModal);
	const dispatch = useDispatch();

	function handleCloseModal() {
		dispatch(closeModal());
	}

	if (modal.name) {
		return (
			<ModalBackground onClick={handleCloseModal} >
				<ModalContent onCloseButtonClick={handleCloseModal} >
					<PersonalDataForm className="mt-6" />
				</ModalContent>
			</ModalBackground>
		);
	}
};
