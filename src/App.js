import './App.css';
import FrontPage from './components/FrontPage';
import TitleBar from './components/TitleBar';

function App() {
	const pageControl = 0;

	return (
		<div className='App'>
			<TitleBar />
			{pageControl === 0 && <FrontPage />}
		</div>
	);
}

export default App;
