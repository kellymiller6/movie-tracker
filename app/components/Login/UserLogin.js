import React, { Component } from 'react';

export default class UserLogin extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  handleErrors(users) {
    const { email, password } = this.state;
    const { signIn, history } = this.props;
    const user = users.data.find(user => {
      return (user.email === email && user.password === password);
    });

    if (!user) {
      return this.setState({error: 'Email and/or password do not match'});
    } else {
      history.replace('/');
      return signIn(user);
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch('/api/users/', {
      method: "GET",
      headers: {"Content-Type": "application/json"},
    })
    .then(resp => resp.json())
    .then(users => this.handleErrors(users))
    .catch((error) => {
      console.log(error, 'cannot find user');
    })
  }

  render() {
    return (
      <form className='user-login'>
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
                Login
              </button>
        <h2>{this.state.error}</h2>
      </form>
    )
  }
}
