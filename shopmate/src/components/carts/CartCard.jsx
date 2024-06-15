import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../../store/cartSlice';

export const CartCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className='container'>
      <div className="rounded-3 shadow w-100 d-flex justify-content-between my-3">

        <div className='w-25 m-3'>
          <img src={product.image} className='card-img-top rounded-3' height={150} alt={product.name} />
        </div>
        <div className='my-3'>
          <h5 className='my-5'>{product.name}</h5>
        </div>

        <div className='d-flex justify-content-between'>
          <span className='fs-4 fw-bold mx-5 my-auto'>&#8377;{product.price}</span>
          <button className='btn btn-danger my-auto mx-3' onClick={() => dispatch(remove(product))}>Remove Item <i class="bi bi-trash3"></i></button>
        </div>

      </div>
    </div>
  )
}