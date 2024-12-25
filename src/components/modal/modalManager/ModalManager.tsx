import type { TModal } from '@src/types/features/modal';
import { Payment , PersonalDataForm } from '@src/components/modal/index';
import { closeModal } from '@src/store/features/modal/modal.slice';
import { getModal } from '@src/store/features/modal/selectors/getModal';
import { useDispatch, useSelector } from 'react-redux';
import { TicketRefund } from '../content/TicketRefund';
import { ModalBackground } from './ModalBackground';
import { ModalContent } from './ModalContent';

type TModalMap = {
	[K in TModal['name']]: React.ReactNode | null;
};

export const ModalManager = () => {
	const modal = useSelector(getModal);
	const dispatch = useDispatch();

	const MODAL_MAP: TModalMap = {
		payment: modal.name === 'payment' ? <Payment data={modal.data} /> : null,
		personalDataForm: <PersonalDataForm className="mt-6" />,
		ticketRefund:
			modal.name === 'ticketRefund' ? (
				<TicketRefund orderId={modal.data.orderId} />
			) : null,
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
