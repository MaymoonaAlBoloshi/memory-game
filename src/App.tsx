import { Game } from './components/Game';
import { Level } from './components/Level';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Outlet,
	Navigate,
} from 'react-router-dom';

const routes = [
	{
		path: '/',
		element: <Level />,
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
