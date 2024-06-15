import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProductList } from '../products/ProductList'
import { CartList } from '../carts/CartList'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path={'/'} element={<ProductList/>}></Route>
            <Route path={'/cart'} element={<CartList/>}></Route>
        </Routes>
    </div>
  )
}
