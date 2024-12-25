import type { ICancelOrderRequest } from '../api/order';
import type { IPaymentResponse } from '../api/payment';

interface IPersonalDataForm {
	data?: never;
	name: 'personalDataForm';
}

interface IPayment {
	data: IPaymentResponse;
	name: 'payment';
}

interface ITicketRefund {
	data: ICancelOrderRequest;
	name: 'ticketRefund';
}

type TModal = IPayment | IPersonalDataForm | ITicketRefund;
