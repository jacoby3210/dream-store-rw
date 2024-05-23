import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {Popup} from '/src/common/common.js';
import Navigator from './components/navigator';

const Header = () => {

 const cart_total_items = 0; // useSelector(state => state.user.cart.entries.length);

	return (
		<header className='header'>
			<div className='content'>
				<menu className='header-menu-left'>
					<Link className='header-menu-button header-logo icon-welcome-page' to="/"/>
					<button className='header-menu-button icon-sales-page'></button>
				</menu>
				<div className='header-search-widget'>
					{/* <button className='header-menu-button icon-search-string'></button> */}
				</div>
				<menu className='header-menu-right'>
					<Link className='header-menu-button icon-register-page' to="/register"/>
					<Link className='header-menu-button icon-cart-page' to="/cart">
						{cart_total_items == 0 ? undefined: <span>{cart_total_items}</span>}
					</Link>
					<Popup className='header-menu-button icon-settings-popup' >
						<Navigator/>
					</Popup>
				</menu>
			</div>
		</header>
	);
	
}

export default React.memo(Header);