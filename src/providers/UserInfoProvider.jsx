import React from 'react';

export const 	UserInfoContext = React.createContext();

const userInfoProvider = ({children}) => {
	const getLocalStorageUserInfo = () => {
		try {
			return JSON.parse(localStorage.getItem('user-info'));
		} catch {

		}
	}
	const [userInfo, setUserInfo] = React.useState(getLocalStorageUserInfo ? getLocalStorageUserInfo : {
		name: '',
		surname: '',
		country: '',
		age: 0,
		bio: '',
	})
	return ( 
		<UserInfoContext.Provider value={{userInfo, setUserInfo}}>
			{children}
		</UserInfoContext.Provider>
	 );
}
 
export default userInfoProvider;