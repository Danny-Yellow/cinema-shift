import { ROUTES } from '@src/constants/routes';
import { getUserSession } from '@src/store/features/userSession/selectors/getUserSession';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoutes = () => {
	const userSeesion = useSelector(getUserSession);

	if (userSeesion.isAuth) {
		return <Outlet />;
	}

	return <Navigate to={ROUTES.SIGNIN} />;
};
