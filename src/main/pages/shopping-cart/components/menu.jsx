
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { addOrder, updateShippingAddress } from '../../../core/user/slice';
import './_menu.scss'

const Menu = (props) => {

	const data = useSelector(state => state.user.shipping);
	const total = useSelector(state => state.user.cart.total);

	const dispatch = useDispatch();
	const handleAddOrder = (evt) => {
		dispatch(updateShippingAddress(addOrder()));
	}
	const handleSaveAsDefault = (evt) => {
		const fs = document.querySelector('.cart-menu-shipping');
		const newShippingAddress = {
			address: 	fs.querySelector('#address').value,
			city: 		fs.querySelector('#city').value,
			postcode: fs.querySelector('postcode').value,
		}
		dispatch(updateShippingAddress(newShippingAddress));
	}
	const handleClearCart = () => {
		dispatch(clearCart(newShippingAddress));
	}
	const handleContinue = () => {
	}

	return (
		<div className='cart-menu'>
			<form>
				<div className='cart-menu-shipping'>
					<h4>SHIPPING ADRESS</h4>
					<input id="city" 			placeholder='City' 			value={data.city}/>
					<input id="address" 	placeholder='Address' 	value={data.address}/>
					<input id="postcode" 	placeholder='Postcode' 	value={data.postcode}/>
					<button onClick={handleSaveAsDefault}>SAVE AS DEFAULT</button>
				</div>
				<div className='controls'>
					<h4>SUB TOTAL: <span>{`$${total}`}</span></h4>
					<h4>GRAND TOTAL: <span className='accent'>{`$${total}`}</span></h4>
					<hr className='controls-hr'/>
					<button className="controls-button proceed" 	onClick={handleAddOrder}>
						{"PROCEED TO CHECKOUT"}
					</button>
					<Link className="controls-button continue"	to='/catalog'>
						{"CONTINUE SHOPPING"}
					</Link>
					<button className="controls-button clear" 		onClick={handleClearCart}>
						{"CLEAR SHOPPING" }
					</button>
				</div>
			</form>
		</div>
	);
}

export default Menu;