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

  handleCreateUser() {
    
  }

  handleSubmit() {

  }

  render() {
    return (
      <form className='create-user'>
        <input type='text'
               placeholder='Name'
               value={this.state.name}
        />
        <input type='text'
               placeholder='E-Mail'
               value={this.state.email}
        />
        <input type='text'
               placeholder='Password'
               value={this.state.password}
        />
        <button type='submit'>
          Create User Account
        </button>
      </form>
    )
  }
}
