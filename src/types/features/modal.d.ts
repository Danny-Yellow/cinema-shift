import type { IPaymentResponse } from '../api/payment/payment';

interface IPersonalDataForm {
	data?: never;
	name: 'personalDataForm';
}

interface ISuccessPayment {
	data: IPaymentResponse['order'];
	name: 'successPayment';
}

type TModal = IPersonalDataForm | ISuccessPayment;
