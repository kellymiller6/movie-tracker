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

  handleExists(users) {
    const { email, password, name } = this.state;
    const { signIn, history } = this.props;

    let user = users.data.find(user => {
      return (user.email === email );
    });

    if(user) {
      alert('user email already exists');
      history.replace('/login');
      alert('please login!')
    } else if (!user) {
      fetch('/api/users/new', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name, email, password})
      })
      history.replace('/login');
      alert('account created! please login!')
      createAccount(user);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = this.state;

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
      </form>
    )
  }
}
