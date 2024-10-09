import { Container } from '@src/components/UI/Container';
import { TopNavigation } from '@src/components/TopNavigation';
import { Poster } from '@src/components/Poster';

function App() {
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
