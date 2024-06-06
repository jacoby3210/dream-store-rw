import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import avatar from '/src/assets/images/avatar.png'
import { subscribeAction } from '/src/main/core/user/slice';

const Subscribe = () => {
	
	const dispatch = useDispatch();
	const subscribe = useSelector(state => state.user.subscribe);

	const handleSubscribe = (evt) => {
		dispatch(subscribeAction(evt.target.value));
		evt.preventDefault();
	}
	
	return (
		subscribe.length == 0 
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