import type { IField } from '@src/types';
import { reset } from '@src/store/features/debitCard/debitCard.slice';
import { changeInputValue } from '@src/store/features/personalDataForm/personalDataForm.slice';
import { getPersonalDataFormField } from '@src/store/features/personalDataForm/selectors/getPersonalDataFormFields';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from './UI/TextField';

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

export const PersonalDataFields = () => {
	const dispatch = useDispatch();
	const fieldValue = useSelector(getPersonalDataFormField);

	useEffect(() => {
		dispatch(reset());
	}, []);

	return (
		<>
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
		</>
	);
};
