import React, { Component } from 'react';

export default class CreateUser extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = this.state;

    fetch('/api/users/new', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({name, email, password})
    })
    .catch((error) => {
      alert('user already exists');
    })
  }

  render() {
    return (
      <form className='create-user'>
        <input type='text'
               placeholder='Name'
               value={this.state.name}
               onChange={(e) => this.setState({
                 name: e.target.value
               })}
        />
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
          Create User Account
        </button>
      </form>
    )
  }
}
