import { Layout } from '@src/components/Layout';
import { DebitCardPage } from '@src/pages/DebitCardPage';
import { FilmPage } from '@src/pages/FilmPage';
import { OrderPage } from '@src/pages/OrderPage';
import { PosterPage } from '@src/pages/PosterPage';
import { ProfilePage } from '@src/pages/ProfilePage';
import { SigninPage } from '@src/pages/SigninPage';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

const isAuth = false;

const publicRoutes = [
	{
		element: <Navigate to={ROUTES.POSTER} />,
		path: '/',
	},
	{
		children: [
			{
				element: <PosterPage  />,
				path: ROUTES.POSTER,
			},
			{
				element: <FilmPage  />,
				path: ROUTES.FILM_ID,
			},
			{
				element: <DebitCardPage />,
				path: ROUTES.DEBIT_CARD,
			},
			{
				element: <SigninPage />,
				path: ROUTES.SIGNIN,
			},
			{
				element: <ProfilePage />,
				path: ROUTES.PROFILE,
			},
			{
				element: <OrderPage />,
				path: ROUTES.TICKETS,
			},
		],
		element: <Layout />,
		path: '/',
	},
];

const privateRoutes: Array<object> = [];

const routes = isAuth ? privateRoutes : publicRoutes;

export const router = createBrowserRouter(routes);
