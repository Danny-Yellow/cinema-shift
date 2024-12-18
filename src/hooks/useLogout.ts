import { clearUserSession } from '@src/store/features/userSession/userSession.slice';
import { useDispatch } from 'react-redux';

export const useLogout = () => {
	const dispatch = useDispatch();

	return () => {
		dispatch(clearUserSession());
		localStorage.removeItem('Authorization');
	};
};
