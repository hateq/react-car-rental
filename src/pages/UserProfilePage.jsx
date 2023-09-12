import React from 'react';
import '../styles/UserProfile.scss';
import Header from '../components/Header';
import { AuthContext } from '../providers/AuthProvider';
import { UserInfoContext } from '../providers/UserInfoProvider';
import axios from 'axios';
import { useQuery } from 'react-query';
import PenIcon from '../../images/icons/pen.svg';
import Modal from '../components/Modal';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import CustomCountrySelect from '../components/CustomCountrySelect';
import CheckStrokeLength from '../components/UI/checkPassword/CheckStrokeLength';
import { UserCarsContext } from '../providers/UserCarsProvider';
import CarCard from '../components/CarCard';
import logOutIcon from '../../images/icons/logout-icon.svg';
import userPhoto from "../../images/users/heizenberg.png";

const UserProfilePage = () => {
	const {isAuth, setIsAuth} = React.useContext(AuthContext);
	const {userInfo, setUserInfo} = React.useContext(UserInfoContext);
	const {userCars, setUserCars} = React.useContext(UserCarsContext);
	const [userCountryFlag, setUserCountryFlag] = React.useState('');
	const [settingsModal, setSettingsModal] = React.useState(false);
	const [newUserName, setNewUserName] = React.useState(isAuth ? userInfo.name : '');
	const [newUserSurname, setNewUserSurname] = React.useState(isAuth ? userInfo.surname : '');
	const [newUserCountry, setNewUserCountry] = React.useState(isAuth ? userInfo.country : '');
	const [newUserAge, setNewUserAge] = React.useState(isAuth ? userInfo.age : 0);
	const [newUserBio, setNewUserBio] = React.useState(isAuth ? userInfo.bio : '');
	async function fetchCountries() {
		return await axios.get('https://restcountries.com/v3.1/all');
}
const data = useQuery('countries', fetchCountries);
 React.useEffect(() => {
	try {
		setUserCountryFlag(data.data.data.find(name => name.name.common == userInfo.country).flags.png)	
	} catch {

	}
 },[data]);
 const onUserFormSubmit = e => {
	e.preventDefault();
	if (newUserBio.length < 20) {

	} else {
		const newUserInfo = {
			...userInfo, name: newUserName, surname: newUserSurname, country: newUserCountry, age: newUserAge, bio: newUserBio
		}
		setUserInfo(newUserInfo)
		setSettingsModal(false);
		localStorage.setItem('user-info', JSON.stringify(newUserInfo))
	}
 }
 const onDeleteButtonClick = car => {
	const newUserCars = userCars.filter(item => {
		return item !== car;
	})
	setUserCars(newUserCars);
	localStorage.setItem('user-cars', JSON.stringify(newUserCars));
 }
 const logOut = () => {
	setUserCars([]);
	setUserInfo({
		name: '',
		surname: '',
		country: '',
		age: 0,
		bio: '',
	});
	setIsAuth(false);
	localStorage.removeItem('user-cars');
	localStorage.removeItem('user-info');
	localStorage.removeItem('user-auth');
 }
	return ( 
		<>
				<Header/>
		{
			isAuth ? 
			<div className="user-profile">
				<div className="user-profile-settings">
					<img src={PenIcon} alt="" onClick={() => {
						setSettingsModal(true);
					}} />
				</div>
			<div className="user-info">
			<img src={userPhoto} alt="" />
			<h2>{`${userInfo.name} ${userInfo.surname}`}</h2>
			<p className='user-country'><span><img src={userCountryFlag} alt="" /></span>{userInfo.country}</p>
			<p className='user-age'>{userInfo.age} years</p>
			</div>
		<div className="user-bio">
					{userInfo.bio}
		</div>
		<div className="user-cars">
					{ userCars.length !== 0 ?
					userCars.map((car,index) => {
						return <CarCard key={index} rentDays={car.rentDays} onClick={() => onDeleteButtonClick(car)} car={car} buttonText='Remove'/>
					}) : <h2>No booked cars</h2>}
		</div>
		<div className="user-logout">
			<div className="user-logout-buttons" onClick={logOut}>
				<h2>
					Log out your account
				</h2>
				<img src={logOutIcon} alt="" />
			</div>
		</div>
		<Modal open={settingsModal} setOpen={setSettingsModal}>
			<form className="user-settings-form" onSubmit={onUserFormSubmit}>
			<MyInput required placeholder='Your name' type='text' value={newUserName} onChange={e => setNewUserName(e.target.value)}/>
			<MyInput required placeholder='Your surname' type='text' value={newUserSurname} onChange={e => setNewUserSurname(e.target.value)}/>
			<CustomCountrySelect setUserCountry={setNewUserCountry} />
			<MyInput required placeholder='Your age' type='number' max={100} value={newUserAge} onChange={e => setNewUserAge(e.target.value)}/>
			<MyInput required placeholder='Tell about you' type='text' value={newUserBio} onChange={e => setNewUserBio(e.target.value)}/>
					<CheckStrokeLength strokeName='Your bio' stroke={newUserBio} minLength={20}/>
					<MyButton>Change</MyButton>
			</form>
		</Modal>
		</div> :
		<div className="user-error">
			<h2>
				You have not log into your account
			</h2>
		</div>
		}
		</>
	 );
}
 
export default UserProfilePage;