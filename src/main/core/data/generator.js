import {brands, categories, colors, sizes, types} 
from '/src/main/core/constants/constants' 

// Function to generate a random number within a range, avoiding repetitions with the last number.
const getRandValue = (last, range) => {
  const rs = Math.floor(Math.random() * range);
  return rs === last ? (rs + 1) % range : rs;
};

const fillRandomValues = (arr, max) => {
	const rs = {};
	arr.forEach(el => {rs[el] = Math.round(Math.random() * max)});
	return rs;
}

// counters
let lastBg = 0, lastBrand = 0, lastCategory = 0, lastType = 0;
const products = Array.from(
	{ length: 100 }, 
	(_, i) => ({
		id: i,
		bg: `/src/assets/images/product_sample_0${lastBg = getRandValue(lastBg, 5)}.png`,
		caption: `PRODUCT SAMPLE ${i}`,
		description: "Known for her sculptural takes on traditional tailoring,\
		Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
		price: 		Math.round(Math.random() * 1000),

		brand: 		lastBrand = getRandValue(lastBrand, brands.length),
		category: lastCategory = getRandValue(lastCategory, categories.length),
		colors: 	fillRandomValues(colors, 1),
		sizes: 		fillRandomValues(sizes, 100),
		type: 		lastType = getRandValue(lastType, types.length),
		trend: 		Math.random() > 0.8,
	})
);

export const stateProducts = {
  all: products,  			// All products in store memory.
  filter: {          		// Selection of products appropriate for the filter.
    conditions: {				// Set of conditions for selection of products.
      color: [],     		// by available colors.
      price: [],     		// by price in range.
      size: [],      		// by available sizes.
      trend: [false],		// by current trend.
    },
    result: products,		// A set of products that meet the conditions
  },
};

// Creating a test set for a user's shopping cart.
const cart = {entries: [], total: 0,}
let lastColor = 0, lastQuantity = 0, lastSize = 0; 
for(let i = 0, index; i < getRandValue(0, 10); i++){
	index = getRandValue(index, products.length - 1);
	const entry = {
		item: products[index],
		options: {
			color: lastColor = getRandValue(lastColor, colors.length - 1),
			quantity: lastQuantity = getRandValue(lastQuantity, 30),
			size: lastSize = getRandValue(lastSize, sizes.length - 1),
		},
	};

	cart.entries.push(entry);
	cart.total += entry.item.price * entry.options.quantity;
}

export const stateUser = {
	auth: false,							// User is auth
	cart: cart,								// Cart for user selection products.
	orders: [],								// User order statuses.
	shipping: {								// Store shipping adress by default for user.
		address: '',
		city: '',
		postcode: '',
	},
	subscribe: false,					// User subscribing on store mailing.
	suggestions: [],	 			  // Products interesting to the user.
}