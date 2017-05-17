import { connect } from 'react-redux';
import { createAccount } from '../../actions/index.js';
import CreateUser from './CreateUser';

const mapStateToProps = (state) => {
  return { user: state.userReducer }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createAccount: (user) => dispatch(createAccount(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
