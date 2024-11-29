import type { ComponentProps, FC, MouseEvent } from 'react';
import {
	changeInputValue,
	submit,
} from '@src/store/features/personalDataForm/personalDataForm.slice';
import { getPersonalDataFormField } from '@src/store/features/personalDataForm/selectors/getOrderFormFields';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
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
	{
		isRequired: false,
		label: 'Почта',
		name: 'email',
		placeholder: 'Введите адрес почты',
	},
	{
		isRequired: false,
		label: 'Город*',
		name: 'city',
		placeholder: 'Введите город',
	},
];

export const OrderForm: FC<ComponentProps<'form'>> = ({
	className,
	...props
}) => {
	const fieldValue = useSelector(getPersonalDataFormField);
	const dispatch = useDispatch();

	function handleButtonClick(event: MouseEvent<HTMLButtonElement>) {
		event.preventDefault();
		dispatch(submit());
	}

	return (
		<form className={clsx('flex flex-col gap-6', className)} {...props}>
			<h2 className="mb-6 text-2xl font-bold text-black">
				Введите ваши данные
			</h2>

			{fields.map((field) => (
				<TextField
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
