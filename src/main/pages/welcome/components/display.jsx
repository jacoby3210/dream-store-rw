import logo from '/src/assets/images/showcase_background.png'

const Display = () => {
	return (
		<section className="section display">
			<div className="content">
				<img src={logo}/>
				<div className="showcase-title">
					<div className="showcase-title-markdown"></div>
					<h1>
						THE BRAND 
						<br/>
						<span>OF LUXERIOUS </span> 
						<span className="accent">FASHION</span>
					</h1>
				</div>
			</div>
		</section>
	);
}

export default Display;