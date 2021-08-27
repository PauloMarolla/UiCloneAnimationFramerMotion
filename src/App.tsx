import { useEffect } from 'react';
import { FirstAndSecond } from './components/FirstAndSecond';
import { Header } from './components/Header';
import { Main } from './styles';
import GlobalStyles from './styles/global';

import { Section, Sticky } from './styles/index';

function App() {
	useEffect(() => {
		window.scrollTo({ top: 0 });
	}, []);

	return (
		<>
			<GlobalStyles />

			<Header />

			<Main style={{ height: '1610vh' }}>
				<Section style={{ height: '72.7%' }}>
					<FirstAndSecond />
				</Section>

				<Section style={{ height: '9.7%' }}>
					<Sticky className="third" />
				</Section>

				<Section style={{ height: '10.1%' }}>
					<Sticky className="fourth" />
				</Section>
			</Main>
		</>
	);
}

export default App;
