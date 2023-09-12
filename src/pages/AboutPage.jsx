import React from 'react';
import Header from '../components/Header';
import '../styles/About.scss';
import ClockIcon from '../../images/icons/clock.svg';
import SecurityIcon from '../../images/icons/security.svg';
import FixIcon from '../../images/icons/fix.svg';
import CarIcon from '../../images/icons/car.svg';
import HeizenbergPhoto from '../../images/users/heizenberg.png';
import BillyPhoto from '../../images/users/billy-harrington.jpg';
import JessePhoto from '../../images/users/jesse-pinkman.png';
import Slider from '../components/Slider';

const AboutPage = () => {
	const feedbackRef = React.useRef(null);
	const [currentWidth, setCurrentWidth] = React.useState(750);
	React.useEffect(() => {
		const feedbackHandler = () => {
			setCurrentWidth(feedbackRef.current.offsetWidth);
		}
		feedbackHandler()
		window.addEventListener('resize', feedbackHandler);
		return () => {
			window.removeEventListener('resize', feedbackHandler)
		}
	},[])

	return ( 
		<>
		<Header activePage={'about'}/>
		<div className="about">
			<h1>ABOUT US</h1>

			<p className="about-work-text">
					We are the car rental service that works SINCE 1990
			</p>
		<p className="customers-percent">95%</p>
		<p className="customers-text">Of satisfied customers</p>
		<p className="models-number">30+</p>
		<p className="models-text">Different car models</p>
		<h2 className="why-us">WHY US?</h2>

		<div className="advantage">
		<img src={ClockIcon} alt="" />
		<h2>WE WORK FAST</h2>
		<p>You will get a car in just ~30 minutes</p>
		</div>

		<div className="advantage">
		<img src={SecurityIcon} alt="" />
		<h2>FULL SECURITY</h2>
		<p>If something will get wrong, we will return your money and give you certificate on 1 free ride</p>
		</div>

		<div className="advantage">
		<img src={FixIcon} alt="" />
		<h2>MAXIMUM COMFORT</h2>
		<p>Every day we check out our cars and if necessary, fix them</p>
		</div>

		<div className="advantage">
		<img src={CarIcon} alt="" />
		<h2>MANY DIFFERENT MODELS</h2>
		<p>You will definitely find something to your liking</p>
		</div>
		<h2 className="people-title">WHAT PEOPLE SAY ABOUT US?</h2>

		<Slider currentWidth={currentWidth} maxChildWidth={750}>
		<div className="feedback" ref={feedbackRef}>
					<div className="user">
						<img src={BillyPhoto} alt="" />
						<h2>BILLY HARRINGTON</h2>
					</div>
					<p className="feedback-text">
						I realy love this car rental service, i wanted to go to my friend Steve, because he bought a new swimming pool, so we decided to try it out. But he lives in Kislovodsk, this is a real hole! Thanks to this beautiful car rental service!
					</p>
				</div>
				<div className="feedback" ref={feedbackRef}>
					<div className="user">
						<img src={HeizenbergPhoto} alt="" />
						<h2>HEIZENBERG</h2>
					</div>
					<p className="feedback-text">
						So, i like this car rental service, you know, i own a car wash and i really know how hard it is to manage business  like this. My son said that he like this car rental too, here is my feedback.
					</p>
				</div>
				<div className="feedback" ref={feedbackRef}>
					<div className="user">
						<img src={JessePhoto} alt="" />
						<h2>JESSE PINKMAN</h2>
					</div>
					<p className="feedback-text">
						Um, my name is Jesse, and this car rental really helped me. So my car was, you know, put on the wanted list, but i realy had to go to my friend Badger. So this is really good car rental service that helped me a lot.
					</p>
				</div>
		</Slider>
		</div>
		</>
	 );
}
 
export default AboutPage;