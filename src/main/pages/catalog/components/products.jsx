import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchData } from '/src/main/core/products/slice';
import {Paginator, View} from '/src/common/common.js';
import ProductCard from '/src/main/layouts/product-card/product-card'
import './_products.scss'

const Products = ({
	data = [], 
	range = 0,
}) => {
	
	const [first, setFirst] = useState(0);
	const onPageChange = (first) => {setFirst(first);};
	
	window.scrollTo(0, 0)
	useEffect(() => {fetchData();}, [data]);	

	return (
		<section className="section products">
			<div className="content">
				<View 
					className="products-list" 
					data={data} 
					from={first} 
					range={range} 
					RenderComponent={ProductCard}
				/>
				<Paginator 
					className='products-paginator'
					itemsPerPage={range} 
					itemsTotal={data.length} 
					pageControlsCount={5} 
					onChangeCallback={onPageChange}
				/>
			</div>
		</section>
	);
}

const mapStateToProps = (state) => ({
  data: state.products.filter.result,
});

export default connect(mapStateToProps, {fetchData})(Products);
