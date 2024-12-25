import { Link } from '@src/components/UI/Link';
import { ROUTES } from '@src/constants/routes';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
	const error = useRouteError();
	console.error(error);

	return (
		<div className="flex flex-col items-center mt-[30vh] gap-4 text-center">
			<h1 className="title text-2xl">Что-то пошло не так...</h1>
			<p className="text-2xl">
				<i>{error instanceof Error && error.message}</i>
				<i>{isRouteErrorResponse(error) && error.status}</i>
			</p>
			<Link to={ROUTES.POSTER}>Перейти на афишу</Link>
		</div>
	);
};
