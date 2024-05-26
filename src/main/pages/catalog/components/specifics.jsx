import React from 'react'
import sample_00 from '/src/assets/images/feature_02.svg'
import sample_01 from '/src/assets/images/feature_00.svg'
import sample_02 from '/src/assets/images/feature_01.svg'
import './_specifics.scss'

const Sample = ({bg, caption, description}) => {
	return (
		<div className="specifics-sample">
				<img className="specifics-sample-icon" src={bg}/>
				<h4>{caption}</h4>
				<p>
					{
						description.split(" /n ").map((text, index) => (
							<React.Fragment key={index}>
								{text}
								<br />
							</React.Fragment>
						))
					}
				</p>
			</div>
	);
}

const Specifics = () => {
	return (
		<section className="specifics">
			<Sample 
				bg={sample_00} 
				caption='Free Delivery' 
				description='Worldwide delivery on all. Authorit tively morph /n next-generation innov tion with extensive models.'
			/>
			<Sample 
				bg={sample_01} 
				caption='Sales & discounts' 
				description='Worldwide delivery on all. Authorit tively morph /n next-generation innov tion with extensive models.'
			/>
			<Sample 
				bg={sample_02} 
				caption='Quality assurance' 
				description='Worldwide delivery on all. Authorit tively morph /n next-generation innov tion with extensive models.'
			/>
		</section>
	);
}

export default Specifics;