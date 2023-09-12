import React from 'react';
import cl from './MyInput.module.scss';

const MyInput = ({placeholder, type, required, value, onChange, min, max}) => {
	return ( 
		<input value={value} onChange={onChange} required={required} className={cl.MyInput} type={type} placeholder={placeholder} min={min} max={max} />
	 );
}
 
export default MyInput;