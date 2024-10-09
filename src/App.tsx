import { Container } from '@src/components/UI/Container';
import { TopNavigation } from '@src/components/TopNavigation';
import { Poster } from '@src/components/Poster';
import { useEffect } from 'react';
import { filmsApiService } from './api/entities/films/films';

function App() {
	useEffect(() => {
		(async () => {
			const { data } = await filmsApiService.getFilmsToday();
			console.log(data);
		})();
	}, []);

	return (
		<header>
			<Container>
				<TopNavigation />
				<div className="mt-12">
					<Poster />
				</div>
			</Container>
		</header>
	);
}

export default App;
