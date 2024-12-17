import { ROUTES } from '@src/constants/routes';
import {
	submit,
} from '@src/store/features/personalDataForm/personalDataForm.slice';
import { hasErrorPersonalDataForm } from '@src/store/features/personalDataForm/selectors/hasErrorPersonalDataForm';
import clsx from 'clsx';
import {
	type ComponentProps,
	type FC,
	type MouseEvent,
	useEffect,
	useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PersonalDataFields } from './PersonalDataFields';
import { Button } from './UI/Button';

export const PersonalDataForm: FC<ComponentProps<'form'>> = ({
	className,
	...props
}) => {
	const [formSubmitted, setFormSubmitted] = useState(false);

	const hasError = useSelector(hasErrorPersonalDataForm);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	function handleButtonClick(event: MouseEvent<HTMLButtonElement>) {
		event.preventDefault();
		dispatch(submit());
		setFormSubmitted(true);
	}

	useEffect(() => {
		if (formSubmitted && !hasError) {
			navigate(ROUTES.DEBIT_CARD);
		}
	}, [formSubmitted, hasError]);

	return (
		<form className={clsx('flex flex-col gap-6', className)} {...props}>
			<h2 className="text-2xl font-bold text-black">Введите ваши данные</h2>
			<PersonalDataFields />
			<Button
				size="full"
				type="submit"
				variant="contained"
				onClick={handleButtonClick}
			>
				Продолжить
			</Button>
		</form>
	);
};
