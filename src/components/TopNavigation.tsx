import { Logo, User, Ticket, Entrance } from '@src/assets/icons/index';
import { Link } from '@src/components/UI/Link';

export const TopNavigation = () => {
	return (
		<nav className="flex items-center justify-between py-6">
			<div className="flex items-center gap-8">
				<Logo />
				<Link startIcon={<User />}>Профиль</Link>
				<Link startIcon={<Ticket />}>Билеты</Link>
			</div>
			<div>
				<Link startIcon={<Entrance />}>Войти</Link>
			</div>
		</nav>
	);
};
