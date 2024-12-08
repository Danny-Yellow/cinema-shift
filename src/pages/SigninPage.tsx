import type { ISigninFields } from '@src/types';
import { SigninForm } from '@src/components/SigninForm';
import { ROUTES } from '@src/constants/routes';
import { useTimer } from '@src/hooks/useTimer';
import { useCreateOtpMutation } from '@src/store/api/authApi';
import { useSigninMutation } from '@src/store/api/usersApit';
import { getSigninForm } from '@src/store/features/signinForm/selectors/getSigninForm';
import {
	changeInputValue,
	deleteError,
	sendCode,
} from '@src/store/features/signinForm/signinForm.slice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const SigninPage = () => {
	const dispatch = useDispatch();

	const form = useSelector(getSigninForm);

	const [createOtp, { data: otpData, isSuccess }] = useCreateOtpMutation();
	const [signin, { isSuccess: isSuccessSignin }] = useSigninMutation();

	const navigate = useNavigate();

	const time = useTimer({
		retryDelay: 10000,
		success: otpData?.success,
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
		signin({ code: +form.fields.code.value, phone: form.fields.phone.value });

		if (isSuccessSignin) {
			navigate(ROUTES.POSTER);
		}
		// Редирект на poster page
	}

	function handleRepeatOtpClick() {
		createOtp({ phone: form.fields.phone.value });
	}

	useEffect(() => {
		if (form.codeIsSent) createOtp({ phone: form.fields.phone.value });
	}, [form.codeIsSent]);

	return (
		<div className="mt-12">
			<SigninForm
				form={form}
				otp={otpData}
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
