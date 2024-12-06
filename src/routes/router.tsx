import { Layout } from '@src/components/Layout';
import { DebitCardPage } from '@src/pages/DebitCardPage';
import { FilmPage } from '@src/pages/FilmPage';
import { PosterPage } from '@src/pages/PosterPage';
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
				element: <PosterPage className="mt-12" />,
				path: ROUTES.POSTER,
			},
			{
				element: <FilmPage className="mt-6" />,
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
		],
		element: <Layout />,
		path: '/',
	},
];

const privateRoutes: Array<object> = [];

const routes = isAuth ? privateRoutes : publicRoutes;

export const router = createBrowserRouter(routes);
