import React from 'react';
import cl from './MyButton.module.scss';	

const MyButton = ({children, onClick}) => {
	return ( 
		<button onClick={onClick} className={cl.MyButton}>
			{children}
		</button>
	 );
}
 
export default MyButton;