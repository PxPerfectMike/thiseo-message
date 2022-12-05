import React from 'react';
import MsgForm from './MsgForm';
function CreatePage({ callback }) {
	const data0 = 0;

	return (
		<>
			<MsgForm />
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
