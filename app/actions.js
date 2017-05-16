export const createAccout = (name, password, email) => {
  return {
    type: 'CREATE_ACCOUNT',
    name,
    password,
    email
  }
}

export const signIn = (email, password) => {
  return {
    type: 'SIGN_IN',
    email,
    password
  }
}

export const signOut = () => {
  return {
    type: 'SIGN_OUT'

  }
}

export const showAll = () => {
  return {
    type: 'SHOW_ALL'
  }
}

export const showFavorites= () => {
  return {
    type: 'SHOW_FAVORITES'
  }
}
