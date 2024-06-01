import './_loyalty.scss'

const Loyalty = () => {

	const features = [
		'15% off welcome offer',
		'Free shipping, returns and exchanges on all orders',
		'$10 off a purchase on your birthday',
		'Early access to products',
		'Exclusive offers & rewards',
	];

	return (
		<div className="user-loyalty">
			<h4 className="user-loyalty-header">LOYALTY HAS ITS PERKS</h4>
			<p className="user-loyalty-paragraph">Get in on the loyalty program where you can earn points and unlock serious perks. Starting with these as soon as you join:</p>
			<ul className="user-loyalty-features">
				{features.map(el => <li className="user-loyalty-features-sample">{el}</li>)}
			</ul>
		</div>
	);
}

export default Loyalty;