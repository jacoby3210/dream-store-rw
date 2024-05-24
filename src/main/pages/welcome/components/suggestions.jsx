
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {View} from '/src/common/common.js';
import ProductCard from '/src/main/layouts/product-card/product-card';
import './_suggestions.scss'

const Suggestions = ({
	startIndex = 0,				// Первый элемент для отображения.
	visibleCount = 9,			// Количество отображаемых элементов.
}) => {

	const auth = false;					//useSelector(state => state.user.auth);
	const data_suggestions = [];//useSelector(state => state.user.suggestions)
	const data_common = [];			//useSelector(state => state.products.filter.result)

	return (
		<section className="section suggestions">
			<div className="content">
				<div className="suggestions-title">
					<h2>Featured Items</h2>
					<p>Shop for items based on what we featured in this week</p>
				</div>
				<View className="suggestions-list" 
					data={(auth ? data_suggestions : data_common )} 
					from={startIndex} 
					range={visibleCount} 
					RenderComponent={ProductCard}
				/>
				<menu className="suggestions-menu">
					<Link className='suggestions-button' to="/catalog">Browse All Product</Link>
				</menu>
			</div>
		</section>
	);
}

export default Suggestions;