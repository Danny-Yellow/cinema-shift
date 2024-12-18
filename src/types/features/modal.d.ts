import type { IPaymentResponse } from '../api/payment/payment';

interface IPersonalDataForm {
	data?: never;
	name: 'personalDataForm';
}

interface IPayment {
	data: IPaymentResponse;
	name: 'payment';
}

type TModal = IPayment | IPersonalDataForm;
