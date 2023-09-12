import React from 'react';
import cl from './BurgerMenu.module.scss';

const BurgerMenu = ({onClickBurger, value}) => {
	return ( 
		<button onClick={onClickBurger} className={`${cl.BurgerMenu} ${value ? cl.active : ''}`}>
		<span></span><span></span><span></span>
	</button>
	 );
}
 
export default BurgerMenu;