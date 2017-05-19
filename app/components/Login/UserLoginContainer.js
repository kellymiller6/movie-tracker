import React from 'react';
import { connect } from 'react-redux';
import UserLogin from './UserLogin';
import { signIn } from '../../Actions';

const mapStateToProps = (state) => {
  return { activeUser: state.userReducer }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (user) => dispatch(signIn(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
