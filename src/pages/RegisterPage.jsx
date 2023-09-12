import axios from 'axios'
import React from 'react'
import Header from '../components/Header'
import MyButton from '../components/UI/button/MyButton'
import CheckStrokeLength from '../components/UI/checkPassword/CheckStrokeLength'
import MyInput from '../components/UI/input/MyInput'
import { UserInfoContext } from '../providers/UserInfoProvider'
import '../styles/Register.scss'
import { Link } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'
import CustomCountrySelect from '../components/CustomCountrySelect'

const RegisterPage = () => {
	const { userInfo, setUserInfo } = React.useContext(UserInfoContext);
	const {isAuth, setIsAuth} = React.useContext(AuthContext);
	const [userName, setUserName] = React.useState('');
	const [userSurname, setUserSurname] = React.useState('');
	const [userCountry, setUserCountry] = React.useState('');
	const [userAge, setUserAge] = React.useState('');
	const [userBio, setUserBio] = React.useState('');

	const onFormSubmit = e => {
		if (userBio.length < 20) {
		} else {
			const newUserInfo = {
				...userInfo,
				name: userName,
				surname: userSurname,
				country: userCountry,
				age: userAge,
				bio: userBio,
			}
			setUserInfo(newUserInfo);
			setIsAuth(true);
			localStorage.setItem('user-info', JSON.stringify(newUserInfo));
			localStorage.setItem('user-auth', 'true');
		}
		e.preventDefault()
	}
	return (
		<>
			<Header />
			{isAuth ? (
				<div className="success-register">
					<h2>You created an account</h2>
					<MyButton>
						<Link to='/react-car-rental/profile'>Go to profile</Link>
						</MyButton>
				</div>
			) : (
				<div className='register'>
					<h2 className='register-title'>
						Create your account and use the best car rental service
					</h2>
					<form onSubmit={onFormSubmit} className='user-info-form'>
						<MyInput
							required
							placeholder={'Your Name'}
							type='text'
							value={userName}
							onChange={e => {
								setUserName(e.target.value)
							}}
						/>
						<MyInput
							required
							placeholder={'Your Surname'}
							type='text'
							value={userSurname}
							onChange={e => {
								setUserSurname(e.target.value)
							}}
						/>
						<CustomCountrySelect setUserCountry={setUserCountry}/>
						<MyInput
							required
							placeholder={'Your Age'}
							type='number'
							value={userAge}
							max={99}
							onChange={e => {
								setUserAge(e.target.value)
							}}
						/>
						<MyInput
							required
							placeholder={'Tell about you'}
							type='text'
							value={userBio}
							onChange={e => {
								setUserBio(e.target.value)
							}}
						/>
						<CheckStrokeLength
							stroke={userBio}
							strokeName={'Bio text'}
							minLength={20}
						/>
						<MyButton>Create an account</MyButton>
					</form>
				</div>
			)}
		</>
	)
}

export default RegisterPage
