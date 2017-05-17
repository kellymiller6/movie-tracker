import React from 'react';
// import '../../main.css';
import MovieGridContainer from '../MovieGrid/MovieGridContainer';
import CreateUserContainer from '../CreateUser/CreateUserContainer';
import UserLoginContainer from '../Login/UserLoginContainer';

const App = () => {
  return (
    <div className='App'>
      <UserLoginContainer />
      <CreateUserContainer />
      <MovieGridContainer />
    </div>
  )
}

export default App
