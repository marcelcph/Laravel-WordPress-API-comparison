import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, decreaseCart, clearCart } from '../redux/CartSlice';
import { selectCartItems, selectCartTotalQuantity, selectCartTotalAmount } from '../redux/CartSlice';
import { Link } from 'react-router-dom';

function Cart() {
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectCartTotalQuantity);
  const totalAmount = useSelector(selectCartTotalAmount);
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleDecreaseItem = (item) => {
    dispatch(decreaseCart(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* conditionally render cart items */}
    {cartItems.length === 0 ? (
      <div className="cart-empty">
        <p>Your cart is empty</p>
        <Link to="/"><span>Start shopping</span></Link>
      </div>
    ) : (
    <>
      {/* table header */}
      <thead>
        <tr>
          <th>Produkt</th>
          <th>Navn</th>
          <th>Pris</th>
          <th>Tilføj/Fjern</th>
        </tr>
      </thead>
      {/* table body */}
      <tbody>
        {cartItems.map((item) => (
          <tr key={item.id}>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{item.name}</div>
                </div>
              </div>
            </td>
            <td>{item.quantity}</td>
            <td>{item.price} kr.</td>
            <td>
              <div className="btn-group">
                <button onClick={() => handleDecreaseItem(item)} className="btn btn-secondary">-</button>
                <button onClick={() => handleRemoveItem(item)} className="btn btn-danger">Fjern</button>
                <button onClick={() => dispatch(addToCart(item))} className="btn btn-primary">+</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </>
    )}
  </table>
</div>
      <div>
        <p>Total quantity: {totalQuantity}</p>
        <p>Total amount: {totalAmount} kr.</p>
        <button onClick={() => handleClearCart()} className='cartClear'>Clear Cart</button>
      </div>
    </>
  );
}

export default Cart;