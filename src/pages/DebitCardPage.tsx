import type { IPaymentResponse } from '@src/types';
import { DebitCard } from '@src/components/DebitCard';
import { Button } from '@src/components/UI/Button';
import { usePaymentMutation } from '@src/store/api/cinemaApi';
import {
	changeDebitCardValue,
	reset,
} from '@src/store/features/debitCard/debitCard.slice';
import { getDebitCard } from '@src/store/features/debitCard/selectors/getDebitCard';
import { closeModal, openModal } from '@src/store/features/modal/modal.slice';
import { getPaymentRequest } from '@src/store/globalSelectors/getPaymentRequestBody';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const DebitCardPage = () => {
	const [payment, { data, error, isSuccess }] = usePaymentMutation();

	const dispatch = useDispatch();

	const debitCard = useSelector(getDebitCard);
	const paymentBody = useSelector(getPaymentRequest);

	function handleChangeInput(name: keyof IDebitCard, value: string) {
		dispatch(changeDebitCardValue({ name, value }));
	}

	function handleButtonClick() {
		payment(paymentBody);
	}

	useEffect(() => {
		dispatch(reset());

		return () => {
			dispatch(closeModal());
		};
	}, []);

	useEffect(() => {
		if (data?.success) {
			dispatch(openModal({ data, name: 'payment' }));
		}
	}, [isSuccess]);

	useEffect(() => {
		if (error && 'data' in error) {
			const errorData = error.data as IPaymentResponse;
			dispatch(openModal({ data: errorData, name: 'payment' }));
		}
	}, [error]);

	return (
		<>
			<h1 className="title mt-12 text-2xl">Введите данные карты для оплаты</h1>
			<div className="max-w-[380px]">
				<DebitCard values={debitCard} onChange={handleChangeInput} />
				<Button
					className="mt-6"
					size="full"
					variant="contained"
					onClick={handleButtonClick}
				>
					Оплатить
				</Button>
			</div>
		</>
	);
};
