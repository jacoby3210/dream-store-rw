import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateItemOnCart } from '/src/main/core/user/slice';
import './_entry.scss';

const Entry = ({ item: propItem, options: propOptions }) => {

	const colors = useSelector(state => state.products.options.colors)
	const sizes = useSelector(state => state.products.options.sizes)

  const { bg, caption, price, type } = propItem || {};
  // const { color, size } = propOptions || {};
  const [color, setColor] = useState(propOptions.color);
  const [quantity, setQuantity] = useState(propOptions.quantity);
  const [size, setSize] = useState(propOptions.size);
  
	const dispatch = useDispatch();
  useEffect(() => {
    setColor(propOptions.color);
    setQuantity(propOptions.quantity);
    setSize(propOptions.size);
  }, [propOptions]);

  const handleChange = useCallback((evt) => {
    const newQuantity = parseInt(evt.target.value, 10);
    dispatch(updateItemOnCart({ item: propItem, quantity: newQuantity}));
    setQuantity(newQuantity);
  }, [dispatch, propItem]);

  const handleClose = useCallback(() => {
    dispatch(updateItemOnCart({item: propItem, quantity: 0}));
  }, [dispatch, propItem]);

  return (
    <div className='cart-item'>
      <picture className='cart-item-picture'>
				<img src={bg} alt={caption} />
			</picture>
      <div className='cart-item-info'>
        <div className='cart-item-caption'>
          <h4 className='cart-item-name'>{caption}</h4>
          <h4 className='cart-item-type'>{type}</h4>
        </div>
        <div className='cart-item-parameters'>
          <p className='cart-item-parameters-color'>{`Color: `}<span className={`color ${colors[color]}`}></span></p>
          <p className='cart-item-parameters-size'>{`Size: ${sizes[size]}`}</p>
          <p className='cart-item-parameters-price'>{`Price: `}<span className='accent'>{`$${price}`}</span></p>
          <p className='cart-item-parameters-quantity'>
            <label>{`Quantity: `}</label>
            <input
              className='cart-item-parameters-quantity-input'
              min="1"
              type="number"
              value={quantity}
              onChange={handleChange}
            />
          </p>
        </div>
      </div>
      <button className='cart-close' onClick={handleClose}><i className="fa-solid fa-close"></i></button>
    </div>
  );
}

export default React.memo(Entry);