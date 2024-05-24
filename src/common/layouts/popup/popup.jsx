import { useEffect, useRef, useState } from 'react';

export const Popup = ({
	children, 
	openState = false,
	text = '',
	...props
}) => {

	// Main functionality.
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
		<div className='popup' ref={self} {...props}>
			<button className='popup-button' onClick={handleClick}>
				{(text.length != 0 && <span>{text}</span>)}
			</button>
			{(isOpenState && <div className='popup-view'>{children}</div>)}
		</div>
	)
}