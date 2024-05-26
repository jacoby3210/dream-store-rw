// Called in case of successful loading of product information. 
const fetchDataSuccess = (state = {}, action) => {
	return {
		...action.payload, 
	}
}

// Called in case of unsuccessful loading of product information. 
const fetchDataFailure = (state = {}, action) => {
	return {
		... state,
		error: action.payload,
	}
}

// Base maintaince for products filter.
const filterData = (
	state = {}, 
	conditions,
) => {
	
	const { all } = state
	if (!Array.isArray(all)) {
		console.error('Invalid state: "all" is not an array');
		return state;
	}

	const byPrice = ({ price }) => conditions['price'].some(range => price >= range.min && price <= range.max) || conditions['price'].length == 0;
	const bySize = ({ sizes }) => conditions['size'].some(size => sizes[size] > 0) || conditions['size'].length == 0;
	const byTrend = ({ trend }) => trend === conditions['trend'][0] || conditions['trend'][0] === false;
	
	const result = all
		.filter(byPrice)
		.filter(bySize)
		.filter(byTrend);

	console.log(
		"Filtered data count:", 
		result.length
	);
	
	return { 
		...state, 
		filter: {conditions, result} 
	};
}

// Filter products to display to the user (by price).
const filterDataByPrice = (
	state = {}, 
	{payload}
) => {
	const {conditions} = state.filter;
	const parse = (txt) => {
		const arr = txt.split("-"); 
		return {min:arr[0], max:arr[1]};
	}
	const price = payload.map(parse);
  return filterData(
		state,
		{...conditions, price},
	);
}

// Filter products to display to the user (by size).
const filterDataBySize = (state = {}, {payload}) => {
	const {conditions} = state.filter;
	return filterData(
		state,
		{...conditions, size: payload},
	);
};

// Filter products to display to the user (by size).
const filterDataByTrend = (state = {}, {payload}) => {
	const {conditions} = state.filter;
	return filterData(
		state,
		{...conditions, trend: payload},
	);
};

// Export a list of actions for products.
export default {
	fetchDataFailure,
	fetchDataSuccess,
	filterDataByPrice,
	filterDataBySize,
	filterDataByTrend,
}