import React, { Component } from 'react';

export default class UserLogin extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;

    fetch('/api/users/', {
      method: "GET",
      headers: {"Content-Type": "application/json"},
    })
    .then(resp => resp.json())
    .then(users => {
      return users.data.find(user => {
        return user.email === email && user.password === password
      })
    })
    .then(user => {
      console.log(user);
    })
    .catch((error) => {
      console.log(error, 'cannot find user');
    })
  }

  render() {
    return (
      <form className='user-login'>
        <input type='text'
               placeholder='E-Mail'
               value={this.state.email}
               onChange={(e) => this.setState({
                 email: e.target.value
               })}
        />
        <input type='text'
               placeholder='Password'
               value={this.state.password}
               onChange={(e) => this.setState({
                 password: e.target.value
               })}
        />
        <button type='submit'
                onClick={(e) => this.handleSubmit(e)}>
          Login
        </button>
      </form>
    )
  }
}
