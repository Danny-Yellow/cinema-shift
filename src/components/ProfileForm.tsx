import { submit } from '@src/store/features/personalDataForm/personalDataForm.slice';
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
import { PersonalDataFields } from './PersonalDataFields';
import { Button } from './UI/Button';

export const ProfileForm: FC<ComponentProps<'form'>> = ({ className }) => {
	const [formSubmitted, setFormSubmitted] = useState(false);

	const hasError = useSelector(hasErrorPersonalDataForm);

	const dispatch = useDispatch();

	function handleButtonClick(event: MouseEvent<HTMLButtonElement>) {
		event.preventDefault();
		dispatch(submit());
		setFormSubmitted(true);
	}

	useEffect(() => {
		if (formSubmitted && !hasError) {
			console.log('успешно');
		}
	}, [formSubmitted, hasError]);

	return (
		<form className={clsx('flex flex-col gap-6', className)}>
			<h2 className="text-2xl font-bold text-black">Профиль</h2>
			<PersonalDataFields />
			<Button
				size="medium"
				type="submit"
				variant="contained"
				onClick={handleButtonClick}
			>
				Обновить данные
			</Button>
			{formSubmitted && !hasError && (
				<p className="text-primary">Данные сохранены</p>
			)}
		</form>
	);
};
