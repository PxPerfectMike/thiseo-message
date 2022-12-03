import React from 'react';
function CreatePage({ callback }) {
	const data0 = 0;
	return (
		<>
			<button
				onClick={() => {
					callback(data0);
				}}
			>
				reset
			</button>
		</>
	);
}

export default CreatePage;
