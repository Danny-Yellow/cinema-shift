import type { TModal } from '@src/types/features/modal';
import { closeModal } from '@src/store/features/modal/modal.slice';
import { getModal } from '@src/store/features/modal/selectors/getModal';
import { useDispatch, useSelector } from 'react-redux';
import { Payment } from '../Payment';
import { PersonalDataForm } from '../PersonalDataForm';
import { TicketRefund } from '../TicketRefund';
import { ModalBackground } from './ModalBackground';
import { ModalContent } from './ModalContent';

type TModalMap = {
	[K in TModal['name']]: React.ReactNode | null;
};

export const ModalManager = () => {
	const modal = useSelector(getModal);
	const dispatch = useDispatch();

	const MODAL_MAP: TModalMap = {
		payment: modal.data ? <Payment data={modal.data} /> : null,
		personalDataForm: <PersonalDataForm className="mt-6" />,
		ticketRefund: <TicketRefund />,
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
