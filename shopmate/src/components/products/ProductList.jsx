import React from 'react'
import { ProductCard } from './ProductCard'
import UseTitle from '../hooks/UseTitle'



export const ProductList = () => {

  UseTitle('Products');
    const products = [
        {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png"},
        {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png"},
        {"id": 3, "name": "JBL Tune 760NC", "price": 179, "image": "assets/images/1003.png"},
        {"id": 4, "name": "Logitech H111 Wired", "price": 39, "image": "assets/images/1004.png"},
        {"id": 5, "name": "APPLE Airpods Max Bluetooth Headset", "price": 199, "image": "assets/images/1005.png"},
        {"id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 29, "image": "assets/images/1006.png"}
      ]
    
    
    
  return (
    <div className='container'>
     <div className='row'>
     {
        products.map((product) => (
            <div className='col-md-4 my-3'>
                <ProductCard key={product.id} product={product}/>
            </div>
        ))
      }
     </div>
    </div>
  )
}
