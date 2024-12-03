import { DebitCard } from '@src/components/DebitCard';
import { Button } from '@src/components/UI/Button';
import { usePaymentMutation } from '@src/store/api/api';
import { changeDebitCardValue } from '@src/store/features/debitCard/debitCard.slice';
import { getDebitCard } from '@src/store/features/debitCard/selectors/getDebitCard';
import { getPaymentRequest } from '@src/store/globalSelectors/getPaymentRequestBody';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const DebitCardPage = () => {
	const [payment, { isSuccess }] = usePaymentMutation();

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
		// Показать модалку
	}, [isSuccess]);

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
