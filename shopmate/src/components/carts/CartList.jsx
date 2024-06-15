import React from 'react'
import { CartCard } from './CartCard'
import  UseTitle  from '../hooks/UseTitle'
import { useSelector } from 'react-redux'

export const CartList = () => {
  UseTitle('Cart')


    const products  = useSelector(state => state.cartState.cartList)
    const total  = useSelector(state => state.cartState.total)

    // const products = [
    //   {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": '/assets/images/1001.png'},
    //   {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png"},
    //   {"id": 3, "name": "JBL Tune 760NC", "price": 179, "image": "/assets/images/1003.png"},
    //    ]
    
  return (
    <div className='container mt-5'>
      <div className='d-flex justify-content-between mx-4'>
        <span className='fs-3 fw-bold'>Cart Items: {products.length}</span>
        <span  className='fs-3 fw-bold'>Total Price: &#8377;{total}</span>
      </div>
     <div className='row'>
     {
        products.map((product) => (
            <div className=''>
                <CartCard key={product.id} product={product}/>
            </div>
        ))
      }
     </div>
    </div>
  )
}