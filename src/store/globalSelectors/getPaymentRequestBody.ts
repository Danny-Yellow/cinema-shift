import type { IPaymentRequest } from '@src/types/api/payment/payment';
import type { RootState } from '../store';

export const getPaymentRequest = (state: RootState): IPaymentRequest => {
	const { debitCard, personalDataForm, scheduleSelection } = state;

	const tickets = scheduleSelection.selectedSeats.map((ticket) => ({
		column: ticket.col,
		row: ticket.row,
	}));

	return {
		debitcard: {
			cvv: debitCard.cvv,
			expireDate: debitCard.expireDate,
			pan: debitCard.pan,
		},
		filmId: '1',
		person: {
			firstname: personalDataForm.field.firstname.value,
			lastname: personalDataForm.field.lastname.value,
			middlename: personalDataForm.field.middlename.value,
			phone: personalDataForm.field.phone.value,
		},
		seance: {
			date: scheduleSelection.selectedSchedule.date,
			time: scheduleSelection.selectedSchedule.seance?.time ?? '',
		},
		tickets,
	};
};
