import type { IOtpResponse, ISigninFields, ISigninForm } from '@src/types';
import type { FC } from 'react';
import { ResendOtpCode } from './ResendOtpCode';
import { Button } from './UI/Button';
import { TextField } from './UI/TextField';

interface ISigninFormProps {
	form: ISigninForm;
	otp?: IOtpResponse;
	time: number | null;
	onChangeInputs: (name: keyof ISigninFields, value: string) => void;
	onContinueClick: () => void;
	onInputsFocus: (name: keyof ISigninFields) => void;
	onRepeatOtpClick: () => void;
	onSigninClick: () => void;
}

export const SigninForm: FC<ISigninFormProps> = ({
	form,
	onChangeInputs,
	onContinueClick,
	onInputsFocus,
	onRepeatOtpClick,
	onSigninClick,
	otp,
}) => (
	<form>
		<h1 className="title mb-6 text-2xl">Авторизация</h1>
		<p className="mb-6">
			Введите{' '}
			{otp?.success && form.codeIsSent ? 'проверочный код' : 'номер телефона'}{' '}
			для входа в личный кабинет
		</p>
		<TextField
			className="mb-10 block w-[464px]"
			error={form.fields.phone.error}
			placeholder="Телефон"
			value={form.fields.phone.value}
			onChange={(event) => onChangeInputs('phone', event.target.value)}
			onFocus={() => onInputsFocus('phone')}
		/>
		{otp?.success && form.codeIsSent ? (
			<>
				<TextField
					className="mb-10 w-[464px]"
					error={form.fields.code.error}
					placeholder="Проверочный код"
					value={form.fields.code.value}
					onChange={(event) => onChangeInputs('code', event.target.value)}
					onFocus={() => onInputsFocus('code')}
				/>
				<Button
					className="mb-10"
					size="medium"
					variant="contained"
					onClick={(event) => {
						event.preventDefault();
						onSigninClick();
					}}
				>
					Войти
				</Button>
				<ResendOtpCode otp={otp} onRepeatOtpClick={onRepeatOtpClick} />
			</>
		) : (
			<Button
				size="medium"
				variant="contained"
				onClick={(event) => {
					event.preventDefault();
					onContinueClick();
				}}
			>
				Продолжить
			</Button>
		)}
	</form>
);
