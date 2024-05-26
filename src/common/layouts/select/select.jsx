import {useEffect, useRef, useState} from 'react';
import './_select.scss'

export const Select = ({
	caption = '',
	options = [],
	onChange = () => {},
	RenderElement,
}) => {

	const selectRef = useRef(null)
	const [isOpenState, setOpenState] = useState(false);

	const handleClick = (evt) => {setOpenState((prev) => !prev)}
	const handleClickOutside = (event) => {
		if (selectRef.current && !selectRef.current.contains(event.target)) {
			setOpenState(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, []);	

	return (
		<div ref={selectRef} className={isOpenState ? 'select open' : 'select'} onChange={onChange}>
			<button className={'select-button'} onClick={handleClick}>
				<span className={'select-button-arrow'}>
					<i className={'fa-solid fa-chevron-down'}></i>
				</span>
				<span className='select-caption'>{caption}</span>
			</button>
			<ul className={'select-options'}>
				{options.map((option, i) => <RenderElement key={i} {...option}/>)}
			</ul>
		</div>
	);
}