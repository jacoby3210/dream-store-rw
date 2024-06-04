import React from 'react';
import { useSelector } from 'react-redux';
import avatar from '/src/assets/images/avatar.png'

const Subscribe = () => {

	const subscribe = useSelector(state => state.user.subscribe);
	const handleSubscribe = () => {}
	
	return (
		subscribe 
		? null
		: <section className="subscribe">
			<div className="content">
				<div className="subscribe-info">
					<img className="subscribe-info-avatar" src={avatar} alt=""/>
					<p className="subscribe-info-text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“</p>
				</div>
				<form className="subscribe-form">
					<h3 className='subscribe-form-caption'>SUBSCRIBE<span>FOR OUR NEWLETTER AND PROMOTION</span></h3>
					<div>
						<input className="subscribe-form-email" placeholder="Enter Your Email"/>
						<button className="subscribe-form-button" type="submit" onClick={handleSubscribe}>Subscribe</button>
					</div>
				</form>
			</div>
		</section>
	);
}

export default React.memo(Subscribe)