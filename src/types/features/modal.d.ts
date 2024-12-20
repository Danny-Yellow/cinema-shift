import type { IPaymentResponse } from '../api/payment/payment';

interface IPersonalDataForm {
	data?: never;
	name: 'personalDataForm';
}

interface IPayment {
	data: IPaymentResponse;
	name: 'payment';
}

interface ITicketRefund {
	data?: never;
	name: 'ticketRefund';
}

type TModal = IPayment | IPersonalDataForm | ITicketRefund;
