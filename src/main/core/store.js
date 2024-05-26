// store.js
import {configureStore} from '@reduxjs/toolkit';
import products from './products/slice.js'
import user from './user/slice.js'

// Create data store for app.

export const store = configureStore({
  reducer: {
		'products': products,
		'user': user,
	},
});