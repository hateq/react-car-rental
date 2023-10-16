import React from 'react';
import '../styles/Footer.scss';
import gitHubLogo from '../../images/icons/github-logo.svg';
import linkedinLogo from '../../images/icons/linkedin-logo.svg';
import telegramLogo from '../../images/icons/telegram-logo.svg';
const Footer = () => {
	return ( 
		<footer className='footer'>
			<div className="social-links">
			<a style={{filter: 'contrast(2)'}} target='_blank' href="https://github.com/hateq"><img src={gitHubLogo} alt="" /></a>
			<a target='_blank' href="https://www.linkedin.com/in/vadim-konyukhov-a958b9283/"><img src={linkedinLogo} alt="" /></a>
			<a target='_blank' href="https://t.me/hateql"><img src={telegramLogo} alt="" /></a>
			</div>
			<h2 className="footer-text">This company is not real</h2>
		</footer>
	 );
}
 
export default Footer;
