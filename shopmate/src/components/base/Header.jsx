import React from 'react'

import { Link,NavLink } from "react-router-dom";
import './../css/header.css'
import { useSelector} from 'react-redux'

export const Header = () => {

  const cartItems = useSelector(state => state.cartState.cartList);

  const iconStyle = {
    cursor: 'pointer'
  };

  return (
    <div className='sticky-top bg-white'>
      <nav className={`navbar navbar-expand-lg `}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <div className="d-flex align-items-center mr-2">
              <img src="/assets/logos/logo.png" alt="Logo" width="110" className="d-inline-block align-text-top me-2" />
              <p className={`m-0`} style={{ fontSize: '1.3rem' }}>CodeBook</p>
            </div>
          </Link>
          <div className=" cursor-pointer d-flex justify-content-center my-auto " style={{ marginLeft: '-170px' }}>

            <NavLink to="/" className="text-decoration-none text-black">
              <span className="fs-5 mx-2  rounded p-1 px-2 pb-2">
                Home
              </span>
            </NavLink>

            <NavLink to="/cart" className="text-decoration-none text-black">
              <span className="fs-5 mx-2 rounded py-1 pb-2 px-2">
                Cart
              </span>
            </NavLink>
          </div>
          <Link to="/cart" className='text-decoration-none'>
            <span className="icon-button" style={iconStyle}>
              <i className="bi bi-cart mx-2 cursor-pointer fs-3 text-danger">
                <sup className='bg-primary px-2 py-1 rounded-5 text-black fs-6' >{cartItems.length}</sup> </i>
            </span>
            </Link>
        </div>
      </nav>
    </div>
  )
}