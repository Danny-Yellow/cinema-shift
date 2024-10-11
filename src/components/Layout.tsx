import { Container } from '@src/components/UI/Container';
import { TopNavigation } from '@src/components/TopNavigation';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
	return (
		<>
			<header>
				<Container>
					<TopNavigation />
				</Container>
			</header>
			<main>
				<Container>
					<Outlet />
				</Container>
			</main>
		</>
	);
};
