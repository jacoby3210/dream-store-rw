import React from 'react';
import Subscribe from './components/subscribe'
import Tail from './components/tail'

const Footer = () => {
	return (
		<footer className='footer'>
			<Subscribe/>
			<Tail/>
		</footer>
	);
}

export default React.memo(Footer);