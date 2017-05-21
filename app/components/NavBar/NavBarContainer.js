import { connect } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import { signOut } from '../../actions/index.js';

const mapStateToProps = (state) => {
  return { user: state.userReducer }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
