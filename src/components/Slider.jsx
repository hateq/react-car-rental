import React from 'react';
import '../styles/Slider.scss';
import BtnPrev from '../../images/icons/btn-prev.svg';
import BtnNext from '../../images/icons/btn-next.svg';

const Slider = ({children, currentWidth, maxChildWidth}) => {
	
	const [offset, setOffset] = React.useState(0);
	React.useEffect(() => {
		window.addEventListener('resize', () => {
			setOffset(0);
		})
	},[])

	const btnPrevOnClick = () => {
		setOffset(prev => {
			if (prev + currentWidth == (children.length - (children.length - 1)) * currentWidth) {
				return -(currentWidth * (children.length - 1));
			} else {
				return prev + currentWidth;
			}
		})
	}
	const btnNextOnClick = () => {
		setOffset(prev => {
			if (prev - currentWidth == -(children.length) * currentWidth) {
				return 0;
			} else {
				return prev - currentWidth;
			}
		})
	}
	
	return ( 
		<div className='slider'>
			<img className='arrow arrow-prev' src={BtnPrev} alt="" onClick={btnPrevOnClick}/>
			<div className="window">
				<div style={{maxWidth: `${maxChildWidth}px`,
						minWidth: 0,
						transform: `translateX(${offset}px)`}} className="slider-line" >
					{children.map((child, index) => {
						return React.cloneElement(child, {
							key: index,
							style: {
								height: '100%',
								zIndex: 90,
								maxWidth: `100%`,
								minWidth: `100%`,
							}
						})
					})}
				</div>
			</div>
			<img className='arrow arrow-next' src={BtnNext} alt="" onClick={btnNextOnClick} />
		</div>
	 );
}
 
export default Slider;