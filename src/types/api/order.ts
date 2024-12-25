import type { ITicket } from './schedule';

export type TStatusOrder = 'CANCELED' | 'PAYED';

export interface ICinemaOrder {
	_id: string;
	created: string;
	filmName: string;
	orderNumber: number;
	phone: string;
	status: TStatusOrder;
	tickets: ITicket[];
}

export interface IOrderResponse {
	orders: ICinemaOrder[];
	reason?: string;
	success: boolean;
}

export interface ICancelOrderRequest {
	orderId: string;
}

export interface ICancelOrderResponse {
	reason?: string;
	success: boolean;
}
