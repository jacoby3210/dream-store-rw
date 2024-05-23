import { useEffect, useRef, useState } from 'react';

export const Popup = ({
	children, 
<<<<<<< HEAD
	openState = false,
=======
>>>>>>> fa0a6c237577a0f18b48654f1e055ca32aab2241
	text = '',
	...props
}) => {

	// Main functionality.
<<<<<<< HEAD
	const self = useRef(null);
	const [isOpenState, setOpenState] = useState(openState);
	const handleClick= () => {setOpenState((prevOpenState) => !prevOpenState)}
	const handleClickOutside = (e) => {
		if (self.current && !self.current.contains(e.target)) {
=======
	const dropdownRef = useRef(null);
	const [isOpenState, setOpenState] = useState(false);
	const handleClick= () => {setOpenState((prevOpenState) => !prevOpenState)}
	const handleClickOutside = (event) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
>>>>>>> fa0a6c237577a0f18b48654f1e055ca32aab2241
			setOpenState(false);
		}
	};
	
	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {document.removeEventListener('click', handleClickOutside, true);};
<<<<<<< HEAD
	}, [openState]);

	// Render component.
	return (	
		<div className='popup' ref={self} >
			<button className='popup-button' onClick={handleClick} {...props}>
				{(text.length != 0 && <span>{text}</span>)}
			</button>
			{(isOpenState && <div className='popup-view'>{children}</div>)}
		</div>
=======
	}, []);

	// Render component.
	return (	
		<button 
			className='popup-button' 
			ref={dropdownRef} 
			onClick={handleClick}
			{...props} 
		>
			{(text.length != 0 && <span>{text}</span>)}
			{(isOpenState && <div className='popup-view'>{children}</div>)}
		</button>
>>>>>>> fa0a6c237577a0f18b48654f1e055ca32aab2241
	)
}