import React from 'react';
import './modal.css';

function Modal(props) {
	if (!props.show) {
		return null;
	}

	return (
		// Hello from modal
		<div className='modal'>
			<div className='modal-box'>
				<div className='modal-header'>
					<div className='modal-title'>About</div>
				</div>
				<p className='modal-body'>
					A basic weather app made with react. This app shows current weather
					data, a three day forecast, as well as additional current day weather
					details. Enter in any location you'd like into the search bar to
					generate the weather!
				</p>
				<div className='modal-footer'>
					<button className='modal-button' onClick={props.onClose}>
						Close
					</button>
				</div>
			</div>
		</div>
	);
}

export default Modal;
