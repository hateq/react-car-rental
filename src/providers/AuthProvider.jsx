import React from 'react';

export const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
	const getLocalStorageAuth = localStorage.getItem('user-auth');
	const [isAuth, setIsAuth] = React.useState(getLocalStorageAuth ? true : false);
	
	return ( 
		<AuthContext.Provider value={{isAuth, setIsAuth}}>
			{children}
		</AuthContext.Provider>
	 );
}
 
export default AuthProvider;