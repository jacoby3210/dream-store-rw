import React from 'react';

const Tail = () => {
	return (
		<section className="tail">
			<div className="content">
				<p className="tail-copyright">
					© 2022  Brand  All Rights Reserved.
				</p>
				<menu className="tail-social-media">
					<a className="tail-social-media-link icon-facebook" href="#"></a>
					<a className="tail-social-media-link icon-inst"     href="#"></a>
					<a className="tail-social-media-link icon-pin"      href="#"></a>
					<a className="tail-social-media-link icon-twitter"  href="#"></a>
				</menu>
			</div>
		</section>
	);
}

export default React.memo(Tail);