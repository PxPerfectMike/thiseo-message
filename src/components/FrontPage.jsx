import React from 'react';
function FrontPage({ callback }) {
	const data1 = 1;
	const data2 = 2;
	return (
		<>
			<div className='frontpageContainer'>
				<div className='CTA-info'>
					{
						'Thiseo is a place to securely store messages for later retrieval with a verification code. The verification code will be presented after a message is securely stored in the database.'
					}
				</div>
				<div className='buttonGroup'>
					<button
						onClick={() => {
							callback(data1);
						}}
						className='wideButton'
					>
						{'Create'}
					</button>
					<button
						onClick={() => {
							callback(data2);
						}}
						className='wideButton'
					>
						{'Retrieve'}
					</button>
				</div>
			</div>
		</>
	);
}

export default FrontPage;
