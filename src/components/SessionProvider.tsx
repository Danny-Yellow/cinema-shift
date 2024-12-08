import { useGetSessionQuery } from '@src/store/api/usersApit';
import { setUserSession } from '@src/store/features/userSession/userSession.slice';
import { type FC, type ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';

interface ISessionProviderProps {
	children: ReactNode;
}

export const SessionProvider: FC<ISessionProviderProps> = ({ children }) => {
	const { data } = useGetSessionQuery();

	const dispatch = useDispatch();

	useEffect(() => {
		if (data?.success) {
			dispatch(setUserSession(data.user));
		}
	}, [data]);

	return <div>{children}</div>;
};
