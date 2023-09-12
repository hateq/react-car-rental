import React from 'react';

export const UserCarsContext = React.createContext();

const UserCarsProvider = ({children}) => {
	const [userCars, setUserCars] = React.useState(JSON.parse(localStorage.getItem('user-cars')) ? JSON.parse(localStorage.getItem('user-cars')) : []);
	return ( 
		<UserCarsContext.Provider value={{userCars, setUserCars}}>
			{children}
		</UserCarsContext.Provider>
	 );
}
 
export default UserCarsProvider;