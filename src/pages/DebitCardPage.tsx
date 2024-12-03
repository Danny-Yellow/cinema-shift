import { DebitCard } from '@src/components/DebitCard';
import { Button } from '@src/components/UI/Button';
import { changeDebitCardValue } from '@src/store/features/debitCard/debitCard.slice';
import { getDebitCard } from '@src/store/features/debitCard/selectors/getDebitCard';
import { useDispatch, useSelector } from 'react-redux';

export const DebitCardPage = () => {
	const dispatch = useDispatch();

	const debitCard = useSelector(getDebitCard);


	function handleChangeInput(name: keyof IDebitCard, value: string) {
		dispatch(changeDebitCardValue({name, value}));
	}

	return (
		<>
			<h1 className="title mt-12 text-2xl">Введите данные карты для оплаты</h1>
			<div className="max-w-[380px]">
				<DebitCard values={debitCard} onChange={handleChangeInput} />
				<Button className="mt-6" size="full" variant="contained">
					Оплатить
				</Button>
			</div>
		</>
	);
};
