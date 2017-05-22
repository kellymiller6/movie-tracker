import userReducer from './user-reducers';

describe('userReducer', () => {


  it('should return default state', () => {
    const mockUser = {
      name: '',
      email: '',
      password: '',
      id: ''
    }

    expect(userReducer(undefined, {})).toEqual(mockUser);
  })

  it('should create an account', () => {

  const mockUser = {
    name: 'Andrew',
    email: 'andrew@gmail.com',
    password: 'password',
  }

    expect(userReducer(mockUser, 'CREATE_ACCOUNT')).toEqual(mockUser)
  })

  it('should sign in', () => {
    const mockUser = {
      email: 'andrew@gmail.com',
      password: 'password'
    }

    expect(userReducer(mockUser, 'SIGN_IN')).toEqual(mockUser);
  })

  it('should be able to sign out', () => {

    const mockUser = {
      name: '',
      email: '',
      password: '',
      id: ''
    }

    expect(userReducer(undefined, 'SIGN_OUT')).toEqual(mockUser)

  })

})
