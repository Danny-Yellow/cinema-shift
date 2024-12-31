import { Movie, Ticket, User } from '@src/components/icons';
import { Link } from '@src/components/UI/Link';
import { ROUTES } from '@src/constants/routes';
import { useLocation } from 'react-router-dom';

export const BottomNavigation = () => {
	const { pathname } = useLocation();

	return (
		<>
			<nav className="fixed bottom-0 left-0 z-30 hidden w-full bg-white sm:block">
				<div className="flex">
					<Link
						className="flex w-full flex-col items-center gap-[2px] py-[10px]"
						color="gray"
						isActive={pathname === ROUTES.POSTER}
						startIcon={<Movie />}
						to={ROUTES.POSTER}
					>
						Афиша
					</Link>
					<Link
						className="flex w-full flex-col items-center gap-[2px] py-[10px]"
						color="gray"
						isActive={pathname === ROUTES.TICKETS}
						startIcon={<Ticket />}
						to={ROUTES.TICKETS}
					>
						Билеты
					</Link>
					<Link
						className="flex w-full flex-col items-center gap-[2px] py-[10px]"
						color="gray"
						isActive={pathname === ROUTES.PROFILE}
						startIcon={<User />}
						to={ROUTES.PROFILE}
					>
						Профиль
					</Link>
				</div>
			</nav>
			<div className="h-[71px]"></div>
		</>
	);
};
