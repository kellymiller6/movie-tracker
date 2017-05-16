export const createAccout = (name, password, email) => {
  return {
    type: 'CREATE_ACCOUNT',
    name,
    password,
    email
  }
}

export const signIn = (id) => {
  return {
    type: 'SIGN_IN',
    id
  }
}

export const signOut = (filter) => {
  return {
    type: 'SIGN_OUT',
    filter
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
