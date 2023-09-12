import React from 'react';
import '../styles/Modal.scss';
const Modal = ({open, setOpen, children}) => {
	return (
		<div className={`overlay ${open ? 'active' : ''}`}>
			<div className="modal">
					<button onClick={() => setOpen(false)} className="button-close">X</button>
				{children}
			</div>
		</div>
	)
}

export default Modal
