import { useSigninMutation } from '@src/store/api/usersApit';
import { setUserSession } from '@src/store/features/userSession/userSession.slice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const useSignin = () => {
	const [signin, { data, isSuccess }] = useSigninMutation();
	const dispatch = useDispatch();

	useEffect(() => {
		if (isSuccess) {
			window.localStorage.setItem('Authorization', data.token);
			dispatch(setUserSession(data.user));
		}
	}, [isSuccess]);

	return {
		isSuccess,
		signin: ({ code, phone }: { code: number; phone: string }) => {
			signin({
				code,
				phone,
			});
		},
	};
};
