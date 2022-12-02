import React from 'react';

function FrontPage() {
	return (
		<>
			<div className='frontpageContainer'>
				<div className='CTA-info'>
					{
						'Thiseo is a place to securely store messages for later retrieval with a verification code. The verification code will be presented after a message is securely stored in the database.'
					}
				</div>
				<div className='buttonGroup'>
					<button className='wideButton'>{'Create'}</button>
					<button className='wideButton'>{'Retrieve'}</button>
				</div>
			</div>
		</>
	);
}

export default FrontPage;
