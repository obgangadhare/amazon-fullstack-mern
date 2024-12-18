import React from "react";
import "./modal.css";
import { useDispatch,} from 'react-redux';
import { addToCart} from '../Store/cartslice';

const Modal = ({ item, onClose }) => {
    const dispatch = useDispatch();
   
    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
       
    };
    if (!item) return null;
 
    return (
        <div className="modal-overlay" >
            <div className="modal-content" >
                <span className="close-button" onClick={onClose}>x</span>
                <div className="modal-image">
                    <img src={item.img} alt={item.heading || item.description} />
                </div>
                <div className="modal-details">
                    <h1>{item.heading}</h1>
                    <p>{item.description}</p>
                    <h3>Price: Rs. {item.price}</h3>
                    <button className="button-container11" onClick={() => handleAddToCart(item)}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
