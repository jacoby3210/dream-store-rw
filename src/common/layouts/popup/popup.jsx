import { useEffect, useRef, useState } from 'react';

export const Popup = ({
	children, 
	text = '',
	...props
}) => {

	// Main functionality.
	const dropdownRef = useRef(null);
	const [isOpenState, setOpenState] = useState(false);
	const handleClick= () => {setOpenState((prevOpenState) => !prevOpenState)}
	const handleClickOutside = (event) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setOpenState(false);
		}
	};
	
	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {document.removeEventListener('click', handleClickOutside, true);};
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
	)
}