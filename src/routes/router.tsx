import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@src/components/Layout';
import { FilmPage } from '@src/pages/FilmPage';
import { PosterPage } from '@src/pages/PosterPage';

const isAuth = false;

const publicRoutes = [
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
				element: <FilmPage />,
			},
		],
	},
];

const privateRoutes: Array<object> = [];

const routes = isAuth ? privateRoutes : publicRoutes;

export const router = createBrowserRouter(routes);
