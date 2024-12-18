import type { FC } from 'react';
import { ROUTES } from '@src/constants/routes';
import { Link } from './UI/Link';

interface IErrorPaymentProps {
	error: string;
}

export const ErrorPayment: FC<IErrorPaymentProps> = ({ error }) => {
	return (
		<div className="mt-8 flex flex-col items-center">
			<h1 className="title mb-4 text-center text-2xl">{`Ошибка: ${error.toLowerCase()}`}</h1>
			<Link className="text-primary" to={ROUTES.POSTER}>
				Перейти на афишу
			</Link>
		</div>
	);
};
