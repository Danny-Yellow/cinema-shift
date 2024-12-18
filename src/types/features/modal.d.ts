import type { IPaymentResponse } from '../api/payment/payment';

interface IPersonalDataForm {
	name: 'personalDataForm';
}

interface IPayment {
	data: IPaymentResponse;
	name: 'payment';
}

type TModal = IPayment | IPersonalDataForm;
