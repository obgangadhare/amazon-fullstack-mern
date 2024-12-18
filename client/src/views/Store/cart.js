
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeFromCart, incrementQuantity, decrementQuantity } from '../Store/cartslice'; 

import './cart.css';

const CartPage = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleIncrementQuantity = (id) => {
        dispatch(incrementQuantity(id));
    };

    const handleDecrementQuantity = (id) => {
        dispatch(decrementQuantity(id));
    };

    return (
       
        <div className="cart-page">
            <h2>Shopping Cart</h2>
            <h6>Price</h6>
            {cart.length === 0 ? (
                <div className='emptyhead'>Your Amazon Cart is empty.</div>
            ) : (
                <div>
                    <div className="cart-list">
                        {cart.map(item => (
                            <div key={item.id} className="cart-item">
                                <div className="cart-item-image">
                                    <img src={item.img} alt={item.id} />
                                </div>
                               
                                <div className='itemdescri'>
                                    {item.description}
                                </div>
                                <div className='itemprice'>Rs.{item.price}</div>
                               
                                        <div className="controlmin" onClick={() => handleDecrementQuantity(item.id)}><i class="fa-solid fa-minus"></i></div>
                                        <div className="itemquant">{item.quantity}</div>
                                        <div className="controlplus" onClick={() => handleIncrementQuantity(item.id)}><i class="fa-solid fa-plus"></i></div>
                                       
                                        <div className="removebtn" onClick={() => handleRemoveFromCart(item.id)}><i class="fa-solid fa-trash"></i></div>
                                 
                                    
                                
                            </div>
                        ))}
                    </div>
                    <div className="total-price">
                        <strong>Total: Rs.{totalPrice}</strong>
                    </div>
                </div>
            )}
            <div to="#">
                <button className="checkout-button">Proceed to Buy</button>
            </div>
        </div>
        
    );
};

export default CartPage;
