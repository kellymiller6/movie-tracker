import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return(
    <div>
      <NavLink to='/' activeClassName='selected'>Home</NavLink>
      <NavLink to='/login' activeClassName='selected'>Login</NavLink>
      <NavLink to='/create-account' activeClassName='selected'>Create Account</NavLink>
      <NavLink to='/favorites' activeClassName='selected'>Favorites</NavLink>
    </div>
  )
}

export default NavBar
