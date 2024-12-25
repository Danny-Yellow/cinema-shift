import type { IOtpResponse } from '@src/types';
import type { FC } from 'react';
import { useTimer } from '@src/hooks/useTimer';

interface IResendOtpCodeProps {
	otp: IOtpResponse;
	onRepeatOtpClick: () => void;
}

export const ResendOtpCode: FC<IResendOtpCodeProps> = ({
	onRepeatOtpClick,
	otp,
}) => {
	const { retryDelay, success } = otp;

	const time = useTimer({
		retryDelay,
		success,
	});

	if (time === 0) {
		return (
			<p className="cursor-pointer underline" onClick={onRepeatOtpClick}>
				Отправить еще раз
			</p>
		);
	}

	return <p className="text-gray">Отправить код повторно через {time} сек</p>;
};
