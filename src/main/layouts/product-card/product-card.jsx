import React from 'react';


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
		<div className='product-sample' onClick={handleClick}>
			<picture className='product-picture'><img src={bg}/></picture>
			<div className='product-info'>
					<h4 className='product-caption'>{caption}</h4>
					<p className='product-description'>{description}</p>
					<p className='product-price'>{price}</p>
			</div>
		</div>
	);
}

export default React.memo(ProductCard);