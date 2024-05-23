import React from 'react';
import avatar from '/src/assets/images/avatar.png'

const Subscribe = () => {
	return (
		<section className="subscribe">
			<div className="content">
				<div className="subscribe-info">
					<img className="subscribe-info-avatar" src={avatar} alt=""/>
					<p className="subscribe-info-text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“</p>
				</div>
				<form className="subscribe-form">
					<h3 className='subscribe-form-caption'>SUBSCRIBE<span>FOR OUR NEWLETTER AND PROMOTION</span></h3>
					<div>
						<input className="subscribe-form-email" placeholder="Enter Your Email"/>
						<button className="subscribe-form-button" type="submit">Subscribe</button>
					</div>
				</form>
			</div>
		</section>
	);
}

export default React.memo(Subscribe)