import {createSlice} from '@reduxjs/toolkit';
import {stateProducts} from '/src/main/core/data/generator'
import reducers from './reducers'

// Create slice with createSlice
const productsSlice = createSlice({
  name: 'products',
  initialState: stateProducts,	
  reducers: reducers,
});

export default productsSlice.reducer;
export const {
	fetchDataSuccess, 
	fetchDataFailure,
	filterDataByPrice,
	filterDataBySize,
	filterDataByTrend,
} = productsSlice.actions;

// Async action creator.
export const fetchData = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchDataSuccess(data));
    } catch (error) {
			dispatch(fetchDataFailure(error.message));
    }
  };
};