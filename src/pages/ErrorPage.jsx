import React from 'react';
import Header from '../components/Header';
import '../styles/ErrorPage.scss';
import {Link} from 'react-router-dom';
import MyButton from '../components/UI/button/MyButton';

const ErrorPage = () => {
	return ( 
		<>
				<Header/>
		<div className="error">
			<h2 className="error-text">This adress does not exist</h2>
			<MyButton>
				<Link className='error-link' to={'/react-car-rental/'}>Go to main page</Link>
			</MyButton>
		</div>
		</>
	 );
}
 
export default ErrorPage;