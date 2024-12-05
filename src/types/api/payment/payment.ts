interface ISeance {
	date: string;
	time: string;
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

interface ITicket {
	column: number;
	filmId: string;
	phone: string;
	row: number;
	seance: ISeance;
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
