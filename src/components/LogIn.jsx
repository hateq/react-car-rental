import React from 'react';
import '../styles/LogIn.scss';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';
import ShowPasswordIcon from '../../images/icons/password-show.svg';
import HidePasswordIcon from '../../images/icons/password-hide.svg';
import CheckStrokeLength from './UI/checkPassword/CheckStrokeLength';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { UserInfoContext } from '../providers/UserInfoProvider';

const LogIn = () => {
	const {isAuth, setIsAuth} = React.useContext(AuthContext);
	const {userInfo, setUserInfo} = React.useContext(UserInfoContext);
	const [showPassword, setShowPassword] = React.useState(false);
	const [logIn,setLogIn] = React.useState(false);
	const [passwordInput, setPasswordInput] = React.useState('');
	const onFormSubmit = (e) => {
		e.preventDefault();
		if (passwordInput.length >= 5) {
			const newUserInfo = {
				...userInfo, name: 'Vadim', surname: 'Konyukhov', country: 'Russia', age: 15, bio: 'My name is Vadim, i am frontend developer from Krasnodar, Russia.'
			}
			setLogIn(true);
			setIsAuth(true);
			localStorage.setItem('user-auth', 'true');
			setUserInfo(newUserInfo);
			localStorage.setItem('user-info', JSON.stringify(newUserInfo));
		} else {
			setLogIn(false);
		}
	}

	return ( 
		<div className='Login'>
			<h2 className={logIn ? 'hidden' : 'login-title'}>Log in your account</h2>
			{logIn ? 
			<div className="success-login">
				<h2 className='success-title'>You succesfully loged in!</h2>
				<MyButton><Link to='/profile'>Go to profile</Link></MyButton>
			</div>
			:	
			 <div className="login-form-wrapper">

			<form onSubmit={onFormSubmit} className="login-form">
				<MyInput required={true} type={'email'} placeholder={'EMAIL'}/>
				<MyInput value={passwordInput} onChange={e => setPasswordInput(e.target.value)} required={true} type={`${showPassword ? 'text': 'password'}`} placeholder={'PASSWORD'}/>
				<CheckStrokeLength strokeName='Password' stroke={passwordInput} minLength={5}/>
				<button className='login-button'>Log In</button>
			</form>
			<img onClick={() => setShowPassword(!showPassword)} className={`show-password ${showPassword ? 'hidden' : ''}`} src={HidePasswordIcon} alt="" />
			<img onClick={() => setShowPassword(!showPassword)} className={`show-password ${showPassword ? '' : 'hidden'}`} src={ShowPasswordIcon} alt="" />
		</div>}
		</div>
	 );
}
 
export default LogIn;