import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Layout } from '@src/components/Layout';
import { FilmPage } from '@src/pages/FilmPage';
import { PosterPage } from '@src/pages/PosterPage';

const isAuth = false;

const publicRoutes = [
	{
		path: '/',
		element: <Navigate to="/poster" />,
	},
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/poster',
				element: (
					<div className="mt-12">
						<PosterPage />
					</div>
				),
			},
			{
				path: '/film/:id',
				element: (
					<div className="mt-6">
						<FilmPage />
					</div>
				),
			},
		],
	},
];

const privateRoutes: Array<object> = [];

const routes = isAuth ? privateRoutes : publicRoutes;

export const router = createBrowserRouter(routes);
