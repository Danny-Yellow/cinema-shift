import { Entrance, Logo, Ticket, User } from '@src/components/icons/index';
import { Link } from '@src/components/UI/Link';
import { ROUTES } from '@src/constants/routes';

export const TopNavigation = () => {
	const isAuth = false;

	// Декомпозировать

	return (
		<nav className="flex items-center justify-between border-b-[1px] border-light py-6 text-neutral">
			{isAuth ? (
				<>
					<div className="flex items-center gap-8">
						<Link to="/poster">
							<Logo />
						</Link>
						<Link startIcon={<User />} to={ROUTES.PROFILE}>
							Профиль
						</Link>
						<Link startIcon={<Ticket />} to={ROUTES.TICKETS}>
							Билеты
						</Link>
					</div>
					<div>
						<Link startIcon={<Entrance />} to={ROUTES.SIGNIN}>
							Выйти
						</Link>
					</div>
				</>
			) : (
				<>
					<Link to="/poster">
						<Logo />
					</Link>
					<Link startIcon={<Entrance />} to={ROUTES.SIGNIN}>
						Войти
					</Link>
				</>
			)}
		</nav>
	);
};
