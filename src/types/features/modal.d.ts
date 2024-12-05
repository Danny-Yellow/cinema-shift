import type { IPaymentResponse } from "../api/payment/payment";

interface IPersonalDataForm {
	name: 'personalDataForm';
}

interface ISuccessPayment {
	data: IPaymentResponse['order'];
	name: 'successPayment';
}

type TModal = IPersonalDataForm | ISuccessPayment;
