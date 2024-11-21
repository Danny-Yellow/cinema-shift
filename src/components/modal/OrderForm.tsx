import type { ComponentProps, FC } from 'react';
import { changeInputValue } from '@src/store/features/orderForm/orderForm.slice';
import { getOrderFormFields } from '@src/store/features/orderForm/selectors/getOrderFormFields';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../UI/Button';
import { TextField } from '../UI/TextField';

export const OrderForm: FC<ComponentProps<'form'>> = ({
	className,
	...props
}) => {
	const fields = useSelector(getOrderFormFields);
	const dispatch = useDispatch();
	const { formState, handleSubmit, register } = useForm();

	console.log(formState);

	return (
		<form
			className={clsx('flex flex-col gap-6', className)}
			{...props}
			onSubmit={handleSubmit((data) => {
				console.log(data);
			})}
		>
			<h2 className="mb-6 text-2xl font-bold text-black">
				Введите ваши данные
			</h2>
			{fields.map((field) => (
				<TextField
					label={field.label}
					placeholder={field.placeholder}
					{...(register(field.name),
					{ required: field.isRequired, value: field.value })}
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
			<Button size="full" type="submit" variant="contained">
				Продолжить
			</Button>
		</form>
	);
};
