import { TopNavigation } from '@src/components/TopNavigation';
import { Container } from '@src/components/UI/Container';
import { Outlet } from 'react-router-dom';
import { ModalManager } from './modal/ModalManager';

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
