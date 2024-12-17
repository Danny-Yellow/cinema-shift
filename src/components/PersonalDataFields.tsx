import type { IField } from '@src/types';
import {
	changeInputValue,
	setInitialInputValues,
} from '@src/store/features/personalDataForm/personalDataForm.slice';
import { getPersonalDataFormField } from '@src/store/features/personalDataForm/selectors/getPersonalDataFormFields';

import { getUserSession } from '@src/store/features/userSession/selectors/getUserSession';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from './UI/TextField';

const fields: IField[] = [
	{
		isDisabled: false,
		isRequired: true,
		label: 'Имя*',
		name: 'firstname',
		placeholder: 'Введите имя',
	},
	{
		isDisabled: false,
		isRequired: true,
		label: 'Фамилия*',
		name: 'lastname',
		placeholder: 'Введите фамилию',
	},
	{
		isDisabled: false,
		isRequired: false,
		label: 'Отчество',
		name: 'middlename',
		placeholder: 'Введите отчество',
	},
	{
		isDisabled: true,
		isRequired: true,
		label: 'Телефон*',
		name: 'phone',
		placeholder: 'Введите номер телефона',
	},
];

export const PersonalDataFields = () => {
	const dispatch = useDispatch();
	const session = useSelector(getUserSession);
	const fieldValue = useSelector(getPersonalDataFormField);

	useEffect(() => {
		dispatch(setInitialInputValues(session.user));
	}, []);

	return (
		<>
			{fields.map((field) => (
				<TextField
					key={field.name}
					disabled={field.isDisabled}
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
