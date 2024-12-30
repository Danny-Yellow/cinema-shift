import type { IOtpResponse, ISigninForm, TSigninFieldName } from '@src/types';
import type { FC } from 'react';
import { ArrowBack } from '@src/components/icons';
import { Button } from '@src/components/UI/Button';
import { IconButton } from '@src/components/UI/IconButton';
import { TextField } from '@src/components/UI/TextField';
import { ResendOtpCode } from './ResendOtpCode';

interface ISigninFormProps {
	form: ISigninForm;
	otp?: IOtpResponse;
	time: number | null;
	onBackButtonClick: () => void;
	onChangeInputs: (name: TSigninFieldName, value: string) => void;
	onContinueClick: () => void;
	onInputsFocus: (name: TSigninFieldName) => void;
	onRepeatOtpClick: () => void;
	onSigninClick: () => void;
}

export const SigninForm: FC<ISigninFormProps> = ({
	form,
	onBackButtonClick,
	onChangeInputs,
	onContinueClick,
	onInputsFocus,
	onRepeatOtpClick,
	onSigninClick,
	otp,
}) => (
	<form className="max-w-[464px]">
		<div className="mb-6 flex items-center gap-8 text-medium">
			<IconButton
				onClick={(event) => {
					event.preventDefault()
					onBackButtonClick();
				}}
			>
				<ArrowBack />
			</IconButton>
			<h1 className="title text-2xl">Авторизация</h1>
		</div>
		<p className="mb-6">
			Введите{' '}
			{otp?.success && form.codeIsSent ? 'проверочный код' : 'номер телефона'}{' '}
			для входа в личный кабинет
		</p>
		<TextField
			className="mb-10 block"
			error={form.fields.phone.errorMessage}
			placeholder="Телефон"
			value={form.fields.phone.value}
			onChange={(event) => onChangeInputs('phone', event.target.value)}
			onFocus={() => onInputsFocus('phone')}
		/>
		{otp?.success && form.codeIsSent ? (
			<>
				<TextField
					className="mb-10"
					error={form.fields.code.errorMessage}
					placeholder="Проверочный код"
					value={form.fields.code.value}
					onChange={(event) => onChangeInputs('code', event.target.value)}
					onFocus={() => onInputsFocus('code')}
				/>
				<Button
					className="mb-10"
					size="full"
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
				size="full"
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
