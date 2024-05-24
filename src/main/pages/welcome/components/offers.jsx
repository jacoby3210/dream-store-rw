import './_offers.scss'

const Offers = () => {
	return (
		<section className="offers">
			<div className="content">
				<div className="offers-sample offers-for-woman">
					<h3>30% OFF <br/><span className="accent">FOR WOMEN</span></h3>
				</div>
				<div className="offers-sample offers-for-man">
					<h3>HOT DEAL <br/><span className="accent">FOR MEN</span></h3>
				</div>
				<div className="offers-sample offers-for-kids">
					<h3>NEW ARRIVALS <br/><span className="accent">FOR KIDS</span></h3>
				</div>
				<div className="offers-sample offers-accesories">
					<h3>LUXIROUS & TRENDY <br/><span className="accent">ACCESORIES</span></h3>
				</div>
			</div>
		</section>
	);
}

export default Offers;