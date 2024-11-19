import { Layout } from '@src/components/Layout';
import { FilmPage } from '@src/pages/FilmPage';
import { PosterPage } from '@src/pages/PosterPage';
import { createBrowserRouter, Navigate } from 'react-router-dom';

const isAuth = false;

const publicRoutes = [
	{
		element: <Navigate to="/poster" />,
		path: '/',
	},
	{
		children: [
			{
				element: (
					<div className="mt-12">
						<PosterPage />
					</div>
				),
				path: '/poster',
			},
			{
				element: (
					<div className="mt-6">
						<FilmPage />
					</div>
				),
				path: '/film/:id',
			},
		],
		element: <Layout />,
		path: '/',
	},
];

const privateRoutes: Array<object> = [];

const routes = isAuth ? privateRoutes : publicRoutes;

export const router = createBrowserRouter(routes);
