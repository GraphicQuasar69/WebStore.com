// src/components/CartPage/CartPage.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../../slices/cartSlice';
import './CartPage.css';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [shipmentMethod, setShipmentMethod] = useState('');

  const handleRemoveFromCart = (id) => {
    dispatch(removeItem({ id }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleShipmentChange = (e) => {
    setShipmentMethod(e.target.value);
  };

  const totalCost = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-page">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
                <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${totalCost}</p>
          <label>
            Select shipment method:
            <select value={shipmentMethod} onChange={handleShipmentChange}>
              <option value="">Select</option>
              <option value="standard">Standard</option>
              <option value="express">Express</option>
            </select>
          </label>
          <button onClick={handleClearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
