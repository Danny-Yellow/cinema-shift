import type { ITicket } from './schedule/schedule';

export type TStatusOrder = 'CANCELED' | 'PAYED';

export enum StatusOrder {
	PAYED = 'Оплачено',
	CANCELED = 'Отменено',
}

export interface ICinemaOrder {
	filmName: string;
	orderNumber: number;
	phone: string;
	status: 'CANCELED' | 'PAYED';
	tickets: ITicket[];
}

export interface IOrderResponse {
	orders: ICinemaOrder[];
	reason?: string;
	success: boolean;
}
