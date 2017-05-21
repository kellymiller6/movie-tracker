const userObj = {
  name: '',
  email: '',
  password: '',
  id: ''
}

const userReducer = (state=userObj, action) => {
  switch(action.type){
    case 'CREATE_ACCOUNT':
      return Object.assign({}, state, action.user);
    case 'SIGN_IN':
      return Object.assign({}, state, action.user);
    case 'SIGN_OUT':
      return Object.assign({}, state, userObj)
    default:
      return state;
  }
}

export default userReducer;
