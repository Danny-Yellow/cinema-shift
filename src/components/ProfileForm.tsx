import { useUpdateProfileMutation } from '@src/store/api/usersApi';
import { submit } from '@src/store/features/personalDataForm/personalDataForm.slice';
import { getPersonalDataFormField } from '@src/store/features/personalDataForm/selectors/getPersonalDataFormFields';
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

	const [updateProfile] = useUpdateProfileMutation();

	const hasError = useSelector(hasErrorPersonalDataForm);
	const inputValues = useSelector(getPersonalDataFormField);

	const dispatch = useDispatch();

	function handleButtonClick(event: MouseEvent<HTMLButtonElement>) {
		event.preventDefault();
		dispatch(submit());
		setFormSubmitted(true);
	}

	useEffect(() => {
		if (formSubmitted && !hasError) {
			updateProfile({
				phone: inputValues.phone.value,
				profile: {
					firstname: inputValues.firstname.value,
					lastname: inputValues.lastname.value,
					middlename: inputValues.middlename.value,
				},
			});
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
