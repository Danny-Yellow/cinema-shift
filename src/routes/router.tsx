import { Layout } from '@src/components/Layout';
import { FilmPage } from '@src/pages/FilmPage';
import { PosterPage } from '@src/pages/PosterPage';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

const isAuth = false;

const publicRoutes = [
	{
		element: <Navigate to={'/poster'} />,
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
		],
		element: <Layout />,
		path: '/',
	},
];

const privateRoutes: Array<object> = [];

const routes = isAuth ? privateRoutes : publicRoutes;

export const router = createBrowserRouter(routes);
