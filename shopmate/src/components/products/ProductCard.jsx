import React from 'react'
import { useDispatch } from "react-redux";
import { add, remove } from '../../store/cartSlice';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const ProductCard = ({ product }) => {

  const dispatch = useDispatch();

  const [isInCart, setIsInCart] = useState(false);
  const cartItems = useSelector(state => state.cartState.cartList);


  const isProductInCart = () => {
    return cartItems.some(item => item.id === product.id);
  };

  useState(() => {
    setIsInCart(isProductInCart());
  }, [cartItems, product.id]);

  const handleCartAction = () => {
    if (isInCart) {
      dispatch(remove(product));
    } else {
      dispatch(add(product));
    }
    setIsInCart(!isInCart);
  };

  return (
    <div>
      <div className="card rounded-4 shadow">
        <img src={product.image} height='220' className='card-img-top p-2' alt={product.name} />
        <div className="card-body " style={{ height: '100px' }}>
          <h5>{product.name}</h5>
        </div>
        <div className='d-flex justify-content-between'>
          <span className='fs-4 fw-bold ms-3 mb-3'>&#8377;{product.price}</span>
          <button className={isInCart ? 'btn btn-danger me-3 mb-3' : 'btn btn-primary me-3 mb-3'} onClick={handleCartAction}>
            {isInCart ? (<div>Remove Item <i class="bi bi-trash3"></i></div>) : 'Add to Cart'}
          </button>

        </div>
      </div>
    </div>
  )
}