import type { ISigninFields } from '@src/types';
import { SigninForm } from '@src/components/SigninForm';
import { useTimer } from '@src/hooks/useTimer';
import { useCreateOtpMutation } from '@src/store/api/authApi';
import { getSigninForm } from '@src/store/features/signinForm/selectors/getSigninForm';
import {
	changeInputValue,
	deleteError,
	sendCode,
} from '@src/store/features/signinForm/signinForm.slice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const SigninPage = () => {
	const dispatch = useDispatch();

	const form = useSelector(getSigninForm);

	const [createOtp, { data }] = useCreateOtpMutation();

	const time = useTimer({
		retryDelay: 10000,
		success: data?.success,
	});

	function handleChangeInputs(name: keyof ISigninFields, value: string) {
		dispatch(changeInputValue({ name, value }));
	}

	function handleInputsFocus(name: keyof ISigninFields) {
		dispatch(deleteError(name));
	}

	function handleContinueClick() {
		dispatch(sendCode());
	}

	function handleSigninClick() {
		// Редирект на poster page
	}

	function handleRepeatOtpClick() {
		// Отправить otp еще раз
	}

	useEffect(() => {
		if (form.codeIsSent) createOtp({ phone: form.fields.phone.value });
	}, [form.codeIsSent]);

	return (
		<div className="mt-12">
			<SigninForm
				fields={form.fields}
				otp={data}
				time={time}
				onChangeInputs={handleChangeInputs}
				onContinueClick={handleContinueClick}
				onInputsFocus={handleInputsFocus}
				onRepeatOtpClick={handleRepeatOtpClick}
				onSigninClick={handleSigninClick}
			/>
		</div>
	);
};
