import React from 'react';
import { Link } from 'react-router-dom';

const Navigator = ({
	types = []
}) => {

	return (
		<ul className='header-menu-navigator'>
			<li className='header-menu-navigator-li'>
				<Link className='header-menu-navigator-link' to={``}>FAQ</Link>
			</li>
			<li className='header-menu-navigator-li'>
				<Link className='header-menu-navigator-link' to={``}>Settings</Link>
			</li>
			<li className='header-menu-navigator-li'>
				<Link className='header-menu-navigator-link' to={``}>Exit</Link>
			</li>
		</ul>
	);

}


export default React.memo(Navigator);