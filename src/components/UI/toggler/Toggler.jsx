import React from 'react';
import cl from './Toggler.module.scss';
const Toggler = ({checked, handleChandge}) => {
	return ( 
		<label className={cl.switch}>
			<input className={cl.switchInput} type="checkbox" id='toggler' onChange={handleChandge} checked={checked} />
			<span className={cl.switchSlider}></span>
		</label>
	 );
}
 
export default Toggler;