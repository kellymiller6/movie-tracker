import React, { Component } from 'react';

export default class CreateUser extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      error:''
    }
  }

  handleExists(users) {
    const { email, password, name } = this.state;
    const { signIn, history } = this.props;
    const user = users.data.find(user => {
      return (user.email === email);
    });

    if (user) {
      return this.setState({
        name: '',
        email: '',
        password: '',
        error: 'Email is already in use'
      });
    } else {
      fetch('/api/users/new', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name, email, password})
      })
      history.replace('/login');
      createAccount(user);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = this.state;

    if (!name || !email || !password) {
      return this.setState({ error: 'Please include all required fields' });
    }

    fetch('/api/users/', {
      method: "GET",
      headers: {"Content-Type": "application/json"},
    })
    .then(resp => resp.json())
    .then(users => this.handleExists(users))
  }

  render() {
    return (
      <form className='create-user'>
        <input type='text'
               className="form name"
               placeholder='Name'
               value={this.state.name}
               onChange={(e) => this.setState({
                 name: e.target.value
               })}
             />
        <input type='text'
               className="form email"
               placeholder='E-Mail'
               value={this.state.email}
               onChange={(e) => this.setState({
                 email: e.target.value
               })}
             />
        <input type='text'
               className="form password"
               placeholder='Password'
               value={this.state.password}
               onChange={(e) => this.setState({
                 password: e.target.value
               })}
             />
        <button type='submit'
                className="form submit"
                onClick={(e) => this.handleSubmit(e)}>
                Create User Account
              </button>
        <h2>{this.state.error}</h2>
      </form>
    )
  }
}
