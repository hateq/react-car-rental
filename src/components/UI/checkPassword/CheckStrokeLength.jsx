import React from 'react';
import cl from './CheckStrokeLength.module.scss';

const CheckStrokeLength = ({strokeName ,stroke, minLength}) => {
	return ( 
		<p style={{display: 'block',color: 'red'}} className={stroke.length > 0 && stroke.length < minLength ? cl.CheckStrokeLength : cl.Hidden}>
			{strokeName} length must be more than {minLength}
		</p>
	 );
}
 
export default CheckStrokeLength;