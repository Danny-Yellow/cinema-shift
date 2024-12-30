import { PersonalDataFields } from '@src/components/common/PersonalDataFields';
import { BottomNavigation } from '@src/components/layout/navigation/BottomNavigation';
import { Button } from '@src/components/UI/Button';
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

export const ProfileForm: FC<ComponentProps<'form'>> = ({ className }) => {
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [isVisibleMessage, setIsVisibleMessage] = useState(false);
	const [buttonIsActive, setButtonIsActive] = useState(false);

	const [updateProfile, { fulfilledTimeStamp, isSuccess: isSuccessUpdate }] =
		useUpdateProfileMutation();

	const hasError = useSelector(hasErrorPersonalDataForm);
	const inputValues = useSelector(getPersonalDataFormField);

	const dispatch = useDispatch();

	function handleChangeInput() {
		setButtonIsActive(true);
		setIsVisibleMessage(false);
		setFormSubmitted(false);
	}

	function handleButtonClick(event: MouseEvent<HTMLButtonElement>) {
		event.preventDefault();
		dispatch(submit());
		setFormSubmitted(true);
		setButtonIsActive(false);
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

	useEffect(() => {
		if (isSuccessUpdate) {
			setIsVisibleMessage(true);
		}
	}, [fulfilledTimeStamp]);

	return (
		<form className={clsx('flex flex-col gap-6', className)}>
			<h2 className="text-2xl font-bold text-black">Профиль</h2>
			<PersonalDataFields onChange={handleChangeInput} />
			<Button
				disabled={!buttonIsActive}
				size="medium"
				type="submit"
				variant="contained"
				onClick={handleButtonClick}
			>
				Обновить данные
			</Button>
			{isVisibleMessage && <p className="text-primary">Данные сохранены</p>}
			<BottomNavigation />
		</form>
	);
};
