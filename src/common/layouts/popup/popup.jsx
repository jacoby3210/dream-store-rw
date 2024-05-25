import { useEffect, useRef, useState } from 'react';
import {mergeProps} from 'react-aria';
import './_popup.scss'

export const Popup = ({
	children, 
	content = '',
	openState = false,
	...props
}) => {

	// Main functionality.
	const resultProps = mergeProps({className:'popup-button'}, props);
	const self = useRef(null);
	const [isOpenState, setOpenState] = useState(openState);
	const handleClick= () => {setOpenState((prevOpenState) => !prevOpenState)}
	const handleClickOutside = (e) => {
		if (self.current && !self.current.contains(e.target)) {
			setOpenState(false);
		}
	};
	
	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {document.removeEventListener('click', handleClickOutside, true);};
	}, [openState]);


	// Render component.
	return (	
		<button  onClick={handleClick} {...resultProps}>
			{(content.length != 0 && <span>{content}</span>)}
			{(isOpenState && <div className='popup-view'>{children}</div>)}
		</button>
	)
}