import React from 'react';

function TitleBar() {
	return (
		<>
			<div
				className='titleBar'
				style={{
					backgroundColor: '#ffa500',
					width: '100vw',
					height: '12vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					fontFamily: 'Roboto, sans-serif',
					fontSize: '2.2rem',
					antialiasing: 'antialiased',
					fontWeight: 'bold',
				}}
			>
				{'Thiseo Message Locker'}
			</div>
		</>
	);
}

export default TitleBar;
