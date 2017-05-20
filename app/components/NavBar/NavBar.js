import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return(
    <div>
      <NavLink to='/' activeClassName='selected' className="link">Home</NavLink>
      <NavLink to='/login' activeClassName='selected' className="link">Login</NavLink>
      <NavLink to='/create-account' activeClassName='selected' className="link">Create Account</NavLink>
      <NavLink to='/favorites' activeClassName='selected' className="link">Favorites</NavLink>
    </div>
  )
}

export default NavBar;
