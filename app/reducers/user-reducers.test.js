import userReducer from './user-reducers';

describe('userReducer', () => {
  it('should return a default state', () => {
    const mockUser = {
      name: '',
      email: '',
      password: '',
      id: ''
    };

    expect(userReducer(undefined, {})).toEqual(mockUser);
  });

  it('should create an account', () => {
    const mockUser = {
      name: 'Andrew',
      email: 'andrew@gmail.com',
      password: 'password',
    };
    const expectedAction = { type: 'CREATE_ACCOUNT' };

    expect(userReducer(mockUser, expectedAction)).toEqual(mockUser);
  });

  it('should sign the user in', () => {
    const mockUser = {
      email: 'andrew@gmail.com',
      password: 'password'
    };
    const expectedAction = { type: 'SIGN_IN' };

    expect(userReducer(mockUser, expectedAction)).toEqual(mockUser);
  });

  it('should sign the user out', () => {
    const mockUser = {
      name: '',
      email: '',
      password: '',
      id: ''
    };
    const expectedAction = { type: 'SIGN_OUT' };

    expect(userReducer(undefined, expectedAction)).toEqual(mockUser);
  });
});
