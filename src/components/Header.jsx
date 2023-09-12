import React from 'react';
import {Link} from 'react-router-dom';
import {useTheme} from '../hooks/useTheme';
import '../styles/Header.scss';
import Modal from './Modal';
import Toggler from './UI/toggler/Toggler';
import BurgerMenu from './UI/burgerMenu/BurgerMenu';
import LogIn from './LogIn';
import { AuthContext } from '../providers/AuthProvider';

const Header = ({activePage}) => {
	const {isAuth, setIsAuth} = React.useContext(AuthContext);

	const [open, setOpen] = React.useState(false);
	const {theme, setTheme} = useTheme();
	const [checked, setChecked] = React.useState(theme == 'dark' ? true : false);
	const [burger, setBurger] = React.useState(false);
	React.useEffect(() => {
		checked ? setTheme('dark') : setTheme('light');
	}, [checked]);
	const handleChandge = () => {
		setChecked(!checked);
		}
	const onClickBurger = () => {
		setBurger(!burger);
	}
	return ( 
		<header className='header'>
		<div className="container">
		<div className={`menu-mobile ${burger ? 'active' : ''}`}>
					<ul className="menu-mobile-list">
						<li className="menu-mobile-item menu-item">
						<Toggler checked={checked} handleChandge={handleChandge}/>
						</li>
					<li className="menu-mobile-item menu-item"><Link to="/about" className={activePage == 'about' ? 'active' : ''}>ABOUT</Link></li>
						<li className="menu-mobile-item menu-item"><Link to="/contacts" className={activePage == 'contacts' ? 'active' : ''}>CONTACTS</Link></li>
						{
							isAuth ? 
							<li className="menu-mobile-item menu-item"><Link to={'/profile'}>Profile</Link></li> :
							<>
							<li className="menu-mobile-item menu-item login" onClick={() => setOpen(true)}><span>Log In</span></li>
						<li className="menu-mobile-item menu-item register"><Link to={'/register'}>Register</Link></li>
							</>
						}
					</ul>
				</div>
				<BurgerMenu onClickBurger={onClickBurger} value={burger}/>
			<nav className='nav'>
				<div className="nav-left">
					<ul className="menu menu-left">
						<li className="menu-item toggler"><Toggler checked={checked} handleChandge={handleChandge}/></li>
						<li className="menu-item"><Link to="/about" className={activePage == 'about' ? 'active' : ''}>ABOUT</Link></li>
						<li className="menu-item"><Link to="/contacts" className={activePage == 'contacts' ? 'active' : ''}>CONTACTS</Link></li>
					</ul>
				</div>
				<Link to={'/'} className='logo-link'><img src="images/logo.png" alt="" className="logo" /></Link>
				<div className="nav-right">
				<ul className="menu menu-right">
					{
						isAuth ? 
						<li className="menu-item profile"><Link to={'/profile'}>Profile</Link></li> :
						<>
						<li className="menu-item login" onClick={() => setOpen(true)}><span>Log In</span></li>
						<li className="menu-item register"><Link to={'/register'}>Register</Link></li>
						</>
					}	
					</ul>
				</div>
			</nav>
			<Modal open={open} setOpen={setOpen}>
				<LogIn/>
				</Modal>
		</div>
		</header>
	 );
	}
export default Header;