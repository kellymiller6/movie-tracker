import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
  constructor() {
    super()
  }

  logUserOut() {
    this.props.signOut();
    return this.props.history.replace('/login');
  }

  welcomeGreeting() {
    return this.props.user.id ? `Hello, ${this.props.user.name}` : '';
  }

  render() {
    return (
      <div>
        <h2 className='welcome-greeting'>{this.welcomeGreeting()}</h2>
        <NavLink to='/' activeClassName='selected' className="link">Home</NavLink>
        <NavLink to='/create-account' activeClassName='selected' className="link">Create Account</NavLink>
        <NavLink to='/favorites' activeClassName='selected' className="link">Favorites</NavLink>
        <NavLink to='/login' activeClassName='selected' className="link">Login</NavLink>
        <a className='link' onClick={() => this.logUserOut()}>Logout</a>
      </div>
    )
  }
}
