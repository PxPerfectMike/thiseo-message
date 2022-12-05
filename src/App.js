import './App.css';
import FrontPage from './components/FrontPage';
import TitleBar from './components/TitleBar';
import React, { useState } from 'react';
import CreatePage from './components/CreatePage';

function App() {
	const [page, setPage] = useState(1);
	const callThisFromChildComponent = (value) => {
		setPage(value);
		console.log('the value is ' + value, 'the page is ' + page);
	};

	return (
		<div className='App'>
			<TitleBar />
			{page === 0 && <FrontPage callback={callThisFromChildComponent} />}
			{page === 1 && <CreatePage callback={callThisFromChildComponent} />}
		</div>
	);
}

export default App;
