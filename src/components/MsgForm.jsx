import React from 'react';

export default class MsgForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		console.log('A name was submitted: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<textarea
					className='mainTextInput'
					maxLength={1500}
					placeholder='Enter your message here'
					type='text'
					value={this.state.value}
					onChange={this.handleChange}
				/>
				<input className='textSubmitButton' type='submit' value='Submit' />
			</form>
		);
	}
}
