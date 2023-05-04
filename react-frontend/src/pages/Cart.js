import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, decreaseCart, clearCart } from '../redux/CartSlice';
import { selectCartItems, selectCartTotalQuantity, selectCartTotalAmount } from '../redux/CartSlice';
import { Link } from 'react-router-dom';

function Cart() {
  const cart = useSelector(state => state.cart)
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
  <table className="table w-full flex">
    {/* conditionally render cart items */}
    {cart.cartItems.length === 0 ? (
          <div className="flex justify-center my-32 ">
          <Link to="/Shop" className='block text-white outline text-center rounded'>
            <div className=' p-10 rounded-lg' >
              <h1 className='text-white text-center font-bold text-3xl mb-4'>Your cart is empty</h1>
              <span className='text-white text-center font-bold text-2xl mb-4'>Start shopping</span>
            </div>
          </Link>
          </div>
        ) : (
    <>
      {/* table header */}
      <thead >
        <tr>
          <th>Produkt</th>
          <th>Antal</th>
          <th>Pris</th>
          <th>Tilføj/Fjern</th>
        </tr>
      </thead>
      {/* table body */}
      <tbody>
        {cartItems.map((item) => (
          <tr >
            
            <td key={item.id}>
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
                <button onClick={() => handleDecreaseItem(item)} className="btn ">-</button>
                <button onClick={() => handleRemoveItem(item)} className="btn btn-danger">Fjern</button>
                <button onClick={() => dispatch(addToCart(item))} className="btn ">+</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
      {/* table footer */}
      <tfoot>
        <tr>
          <td></td>
          <td>Total quantity: {totalQuantity}</td>
          <td>Total amount: {totalAmount} kr.</td>
          <td><button onClick={() => handleClearCart()} className='cartClear '>Clear Cart</button></td> 
        </tr>
      </tfoot>
      
    </>
    )}
  </table>
  </div>
      
    </>
  )
}

export default Cart;