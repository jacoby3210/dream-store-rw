// update item state on cart and total price
const updateItemOnCart = (state = {}, action) => {
	
	const itemIndex = state.cart.entries.findIndex((el => el.item.id == action.payload.item.id))
	if(itemIndex != -1 && action.payload.quantity == 0) {
		state.cart.entries = state.cart.entries.filter((el => el.item.id != action.payload.item.id));
	} else if(itemIndex != -1) {
		const cloneItems = [...state.cart.entries];
		cloneItems[itemIndex] = {
			item: action.payload.item, 
			options: {...cloneItems[itemIndex].options, quantity: action.payload.quantity},
		};
		state.cart.entries = cloneItems
	}	else {
		state.cart.entries.push(
			{
				item: action.payload.item, 
				options: action.payload.options,
			}
		);
	}

	state.cart.total = state.cart.entries.reduce(
		(accum, entry) => accum + entry.item.price * entry.options.quantity, 
		0
	);
}

// Update shipping address by default.
const updateShippingAddress = (state = {}, action) => {
	// send query on server.
	// if success, update data in slice
	state.shipping = action.payload;
}

// Add order in user orders.
const addOrder = (state = {}, action) => {
}

//
const clearCart = (state = {}, action) => {
	state.cart = {entries: [], total: 0}
}

// 
const subscribe =  (state = {}, action) => {
	// send query on server.
	// if success, show confirmation success. 
}

// Export a list of actions for goods.
export default {
	addOrder,
	clearCart,
	subscribe,
	updateShippingAddress,
	updateItemOnCart,
}