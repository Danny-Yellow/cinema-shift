import { Layout } from '@src/components/layout/Layout';
import { DebitCardPage } from '@src/pages/DebitCardPage';
import { ErrorPage } from '@src/pages/ErrorPage';
import { FilmPage } from '@src/pages/FilmPage/FilmPage';
import { OrderPage } from '@src/pages/OrderPage/OrderPage';
import { PosterPage } from '@src/pages/PosterPage/PosterPage';
import { ProfilePage } from '@src/pages/ProfilePage';
import { SigninPage } from '@src/pages/SigninPage';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { PrivateRoutes } from './PrivateRoutes';

const routes = [
	{
		children: [
			{
				children: [
					{
						element: <PosterPage />,
						path: ROUTES.POSTER,
					},
					{
						element: <FilmPage />,
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
						children: [
							{
								element: <ProfilePage />,
								path: ROUTES.PROFILE,
							},
							{
								element: <OrderPage />,
								path: ROUTES.TICKETS,
							},
						],
						element: <PrivateRoutes />,
					},
					{
						element: <Navigate to={ROUTES.POSTER} />,
						index: true,
					},
				],
				errorElement: <ErrorPage />,
			},
		],
		element: <Layout />,
		errorElement: <ErrorPage />,
		path: '/',
	},
];

export const router = createBrowserRouter(routes);
