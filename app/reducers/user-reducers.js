const userObj = {
  name: '',
  password: '',
  email: ''
}

const userReducer = (state=userObj, action) => {
  switch(action.type){
    case 'CREATE_ACCOUNT':
      return
    case 'SIGN_IN':
      return
    case 'SIGN_OUT':
      return
    default:
      return state;
  }
}

export default userReducer
