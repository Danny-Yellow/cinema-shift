import type { IPaymentResponse } from '@src/types';
import type { FC } from 'react';
import { ErrorPayment } from './ErrorPayment';
import { SuccessPayment } from './SuccessPayment';

interface IPaymentProps {
	data: IPaymentResponse;
}

export const Payment: FC<IPaymentProps> = ({ data }) => {
	return data.success ? (
		<SuccessPayment order={data.order} />
	) : (
		<ErrorPayment error={data.reason} />
	);
};
