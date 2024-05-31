import { useEffect } from 'react';
import { connect } from 'react-redux';

import { View } 			from '/src/common/common.js';
import { fetchData } 	from '/src/main/core/products/slice';
import PageHeader 		from "/src/main/layouts/page-header/page-header"

import Entry 		from './components/entry'
import Menu 		from './components/menu'

import './_shopping-cart.scss'

const ShoppingCart = ({
	data = [], 					// Массив данных для отображения.
}) => {

	useEffect(() => {fetchData();}, [data]);	

	return (
		<div className="cart">
			<PageHeader 
				text_1={"SHOPPING CART"} 
			/>
			<section className='cart-main'>
				<div className="content">
					<View 
						className="cart-list" 
						data={data} 
						from={0} 
						range={data.length}
						RenderComponent={Entry}
					/>
					<Menu/>
				</div>
			</section>

		</div>
	);

}

const mapStateToProps = (state) => ({
  data: state.user.cart.entries,
});

export default connect(mapStateToProps, {fetchData})(ShoppingCart);