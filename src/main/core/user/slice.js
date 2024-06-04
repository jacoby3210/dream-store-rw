import { createSlice } from '@reduxjs/toolkit';
import {stateUser} from '/src/main/core/data/generator'
import reducers from './reducers'

// Create slice with createSlice
const userSlice = createSlice({
  name: 'user',
  initialState: stateUser,	
  reducers: reducers,
});

export default userSlice.reducer;
export const {
	addOrder,
	clearCart,
	subscribe,
	updateShippingAddress,
	updateItemOnCart,
	userSubscribe,
} = userSlice.actions;