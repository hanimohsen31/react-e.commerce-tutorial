import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar2.scss'
export const Navbar2 = () => {
  return (
    <div className="Navbar2">
    <div className="Navbar2Container">
        <NavLink to='/'>HOME</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/overview'>CHECKOUT</NavLink>
    </div>
  </div>
  )
}
