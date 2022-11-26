import { Game } from './components/Game';
import { Level } from './components/Level';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const routes = [
	{
		path: '/',
		element: <Game />,
	},
	{
		path: '/level/:difficulty',
		element: <Level />,
	},
];

function App() {
	return (
		<Router>
			<Routes>
				{routes.map((route, i) => (
					<Route key={i} path={route.path} element={route.element} />
				))}
			</Routes>
		</Router>
	);
}

export default App;
