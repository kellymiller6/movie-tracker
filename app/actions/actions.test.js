import * as actions from './index.js';

describe('actions', () => {

  it('createAccount returns an object with user and type', () => {
    const user = { name: 'Andrew', email: 'andrew@gmail.com', password:'password', id:1};
    const action = actions.createAccount(user);

    const returnedObj = {
      type: 'CREATE_ACCOUNT',
      user
    }

    expect(action).toEqual(returnedObj)
  })

  it('should create an action to log in', () => {
    const user = { email: 'ron@yahoo.com', password: 'potatoes', id:2 };
    const action = actions.signIn(user);

    const expectedAction = {
      type: 'SIGN_IN',
      user
    }

    expect(action).toEqual(expectedAction)
  })

})
