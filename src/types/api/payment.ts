import type { ITicket } from './schedule';

interface ISeance {
	date: string;
	time: string;
}

export interface IDebitCard {
	cvv: string;
	expireDate: string;
	pan: string;
}

export interface IPaymentRequest {
	debitcard: IDebitCard;
	filmId: string;
	seance: ISeance;
	person: {
		firstname: string;
		lastname: string;
		middlename: string;
		phone: string;
	};
	tickets: {
		column: number;
		row: number;
	}[];
}

export interface IPaymentResponse {
	reason: string;
	success: boolean;
	order: {
		filmName: string;
		orderNumber: number;
		phone: string;
		status: 'CANCELED' | 'PAYED';
		tickets: ITicket[];
	};
}
