import { ROUTES } from '@src/constants/routes';
import {
	changeInputValue,
	reset,
	submit,
} from '@src/store/features/personalDataForm/personalDataForm.slice';
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
import { useNavigate } from 'react-router-dom';
import { Button } from '../UI/Button';
import { TextField } from '../UI/TextField';

interface IField {
	isRequired: boolean;
	label: string;
	name: TPersonalDataFieldName;
	placeholder: string;
}

const fields: IField[] = [
	{
		isRequired: true,
		label: 'Имя*',
		name: 'firstname',
		placeholder: 'Введите имя',
	},
	{
		isRequired: true,
		label: 'Фамилия*',
		name: 'lastname',
		placeholder: 'Введите фамилию',
	},
	{
		isRequired: false,
		label: 'Отчество',
		name: 'middlename',
		placeholder: 'Введите отчество',
	},
	{
		isRequired: true,
		label: 'Телефон*',
		name: 'phone',
		placeholder: 'Введите номер телефона',
	},
];

export const PersonalDataForm: FC<ComponentProps<'form'>> = ({
	className,
	...props
}) => {
	const [formSubmitted, setFormSubmitted] = useState(false);

	const fieldValue = useSelector(getPersonalDataFormField);
	const hasError = useSelector(hasErrorPersonalDataForm);

	const dispatch = useDispatch();
	const navigate = useNavigate(); 

	function handleButtonClick(event: MouseEvent<HTMLButtonElement>) {
		event.preventDefault();
		dispatch(submit());
		setFormSubmitted(true)
	}

	useEffect(() => {
		dispatch(reset())
	}, [])

	useEffect(() => {
		if (formSubmitted && !hasError) {
			navigate(ROUTES.DEBIT_CARD);
		}
	}, [formSubmitted, hasError]);

	return (
		<form className={clsx('flex flex-col gap-6', className)} {...props}>
			<h2 className="mb-6 text-2xl font-bold text-black">
				Введите ваши данные
			</h2>

			{fields.map((field) => (
				<TextField
					key={field.name}
					error={fieldValue[field.name].errorMessage}
					label={field.label}
					placeholder={field.placeholder}
					value={fieldValue[field.name].value}
					onChange={(event) => {
						dispatch(
							changeInputValue({
								name: field.name,
								value: event.target.value,
							}),
						);
					}}
				/>
			))}
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
