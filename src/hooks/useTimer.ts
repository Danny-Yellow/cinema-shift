import { useEffect, useState } from 'react';

interface IUseTimerProps {
	retryDelay: number | undefined;
	success: boolean | undefined;
}

export const useTimer = ({ retryDelay, success }: IUseTimerProps) => {
	const [time, setTime] = useState<number>(0);

	useEffect(() => {
		if (success && retryDelay) {
			const initialTime = Math.round(retryDelay / 1000);
			setTime(initialTime);

			const intervalId = setInterval(() => {
				setTime((prev) => {
					if (prev <= 1) {
						clearInterval(intervalId);
						return 0;
					}
					return prev - 1;
				});
			}, 1000);

			return () => clearInterval(intervalId);
		}
	}, [success, retryDelay]);

	return time;
};
