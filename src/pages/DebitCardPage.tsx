import type { IDebitCard, IPaymentResponse } from '@src/types';
import { ArrowBack } from '@src/components/icons';
import { DebitCard } from '@src/components/pages/DebitCard';
import { Button } from '@src/components/UI/Button';
import { IconButton } from '@src/components/UI/IconButton';
import { usePaymentMutation } from '@src/store/api/cinemaApi';
import {
	changeDebitCardValue,
	checkErrors,
	reset,
} from '@src/store/features/debitCard/debitCard.slice';
import { getDebitCard } from '@src/store/features/debitCard/selectors/getDebitCard';
import { hasErrorDebitCardFields } from '@src/store/features/debitCard/selectors/hasErrorDebitCardFields';
import { closeModal, openModal } from '@src/store/features/modal/modal.slice';
import { getPaymentRequest } from '@src/store/globalSelectors/getPaymentRequestBody';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const DebitCardPage = () => {
	const [formSubmitted, setFormSubmitted] = useState(false);

	const [payment, { data, error, isSuccess }] = usePaymentMutation();

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const debitCard = useSelector(getDebitCard);
	const hasError = useSelector(hasErrorDebitCardFields);
	const paymentBody = useSelector(getPaymentRequest);

	function handleChangeInput(name: keyof IDebitCard, value: string) {
		dispatch(changeDebitCardValue({ name, value }));
	}

	function handleButtonClick() {
		dispatch(checkErrors());
		setFormSubmitted(true);
	}

	useEffect(() => {
		dispatch(reset());

		return () => {
			dispatch(closeModal());
		};
	}, []);

	useEffect(() => {
		if (formSubmitted && !hasError) {
			payment(paymentBody);
		}
	}, [formSubmitted, hasError]);

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
			<div className="mt-12 flex items-center gap-8 sm:mt-3">
				<IconButton
					className="hidden text-light sm:block"
					onClick={() => navigate(-1)}
				>
					<ArrowBack />
				</IconButton>
				<h1 className="title text-2xl sm:hidden">
					Введите данные карты для оплаты
				</h1>
				<h1 className="title hidden text-2xl sm:block">Карта оплаты</h1>
			</div>
			<div className="max-w-[380px]">
				<DebitCard debitCard={debitCard} onChange={handleChangeInput} />
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
