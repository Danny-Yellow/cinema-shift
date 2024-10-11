import { Logo, User, Ticket, Entrance } from '@src/components/icons/index';
import { Link } from '@src/components/UI/Link';

export const TopNavigation = () => {
	return (
		<nav className="border-light flex items-center justify-between border-b-[1px] py-6 text-neutral">
			<div className="flex items-center gap-8">
				<Link to="/poster">
					<Logo />
				</Link>
				<Link startIcon={<User />} to="/profile">
					Профиль
				</Link>
				<Link startIcon={<Ticket />} to="/tickets">
					Билеты
				</Link>
			</div>
			<div>
				<Link startIcon={<Entrance />} to="/login">
					Войти
				</Link>
			</div>
		</nav>
	);
};
