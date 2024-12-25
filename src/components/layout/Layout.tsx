import { ModalManager } from '@src/components/modal';
import { Container } from '@src/components/UI/Container';
import { Outlet } from 'react-router-dom';
import { TopNavigation } from './TopNavigation';

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
			<ModalManager />
		</>
	);
};
