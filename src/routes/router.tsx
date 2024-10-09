import { createBrowserRouter } from 'react-router-dom';
import { ReactNode } from 'react';
import App from '@src/App';

const isAuth = false;

interface IRoute {
	path: string;
	element: ReactNode;
}

const publicRoutes: IRoute[] = [
	{
		path: '/',
		element: <App />,
	},
];

const privateRoutes: IRoute[] = [];

const routes = isAuth ? privateRoutes : publicRoutes;

export const router = createBrowserRouter(routes);
