import React from 'react';
// import '../../main.css';
import MovieGridContainer from '../MovieGrid/MovieGridContainer';
import CreateUserContainer from '../CreateUser/CreateUserContainer';

const App = () => {
  return (
    <div className='App'>
      <CreateUserContainer />
      <MovieGridContainer />
    </div>
  )
}

export default App
