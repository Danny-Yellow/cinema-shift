import type { TSigninFieldName } from '@src/types';
import { SigninForm } from '@src/components/pages/signinForm/SigninForm';
import { ROUTES } from '@src/constants/routes';
import { useTimer } from '@src/hooks/useTimer';
import { useCreateOtpMutation } from '@src/store/api/authApi';
import { useSigninMutation } from '@src/store/api/usersApi';
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

	const [signin, { data: siginData }] = useSigninMutation();
	const [createOtp, { data: otpData }] = useCreateOtpMutation();

	const navigate = useNavigate();

	const time = useTimer({
		retryDelay: 10000,
		success: otpData?.success,
	});

	function handleChangeInputs(name: TSigninFieldName, value: string) {
		dispatch(changeInputValue({ name, value }));
	}

	function handleInputsFocus(name: TSigninFieldName) {
		dispatch(deleteError(name));
	}

	function handleContinueClick() {
		dispatch(sendCode());
	}

	function handleSigninClick() {
		signin({
			code: +form.fields.code.value,
			phone: form.fields.phone.value,
		});
	}

	function handleRepeatOtpClick() {
		createOtp({ phone: form.fields.phone.value });
	}

	function handleBackButtonClick() {
		navigate(ROUTES.POSTER);
	}

	useEffect(() => {
		if (form.codeIsSent) createOtp({ phone: form.fields.phone.value });
	}, [form.codeIsSent]);

	useEffect(() => {
		if (siginData?.success) navigate(ROUTES.POSTER);
	}, [siginData?.success]);

	return (
		<div className="mt-12">
			<SigninForm
				form={form}
				otp={otpData}
				time={time}
				onBackButtonClick={handleBackButtonClick}
				onChangeInputs={handleChangeInputs}
				onContinueClick={handleContinueClick}
				onInputsFocus={handleInputsFocus}
				onRepeatOtpClick={handleRepeatOtpClick}
				onSigninClick={handleSigninClick}
			/>
		</div>
	);
};
