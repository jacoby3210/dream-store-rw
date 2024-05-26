import React from 'react';
import './_product-card.scss'


const ProductCard = ({
	bg, 
	caption, 
	description, 
	price,
	...props
}) => {

	const handleClick = (evt, item) => {
	}

	return (
		<div className='product-card' onClick={handleClick}>
			<picture className='product-card-picture'><img src={bg}/></picture>
			<div className='product-card-info'>
					<h4 className='product-card-info-caption'>{caption}</h4>
					<p className='product-card-info-description'>{description}</p>
					<p className='product-card-info-price'>{price}</p>
			</div>
		</div>
	);
}

export default React.memo(ProductCard);