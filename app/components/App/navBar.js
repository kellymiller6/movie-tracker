import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className='navBar'>
      <NavLink activeClassName='selected' to='/home'>Home</NavLink>
      <NavLink activeClassName='selected' to='/login'>Create Idea</NavLink>
    </div>
  );
}
