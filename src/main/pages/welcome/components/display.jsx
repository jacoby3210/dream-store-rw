import logo from '/src/assets/images/showcase_background.png'
import './_display.scss'

const Display = () => {
	return (
		<section className="section display">
			<div className="content">
				<img src={logo}/>
				<div className="display-title">
					<div className="display-title-markdown"></div>
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