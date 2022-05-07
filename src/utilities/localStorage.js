const sessionItem = 'autoservice-session'
const usernameItem = 'autoservice-login-username'
const passwordItem = 'autoservice-login-password'

// return user from local storage
export const getUser = () => {
  const session = localStorage.getItem(sessionItem)
  if (session) {
    return JSON.parse(session)
  } else {
    return null
  }
}

// set user to local storage
export const setUser = (user) => {
  const session = localStorage.getItem(sessionItem)
  localStorage.setItem(
    sessionItem,
    JSON.stringify({
      ...JSON.parse(session),
      ...user,
    })
  )
}

// set user to local storage
export const setSession = (session) => {
  localStorage.setItem(sessionItem, JSON.stringify(session))
}

// remove user from local storage
export const removeSession = () => {
  localStorage.removeItem(sessionItem)
}

// remember email & password info with local storage
export const setRememberInfo = (username, password) => {
  localStorage.setItem(usernameItem, username)
  localStorage.setItem(passwordItem, password)
}

// get email & password info from local storage
export const getRememberInfo = () => {
  let username = localStorage.getItem(usernameItem)
  let password = localStorage.getItem(passwordItem)
  if (username && password) {
    return { username, password }
  } else {
    return null
  }
}

// remove email & password info from local storage
export const removeRememberInfo = () => {
  localStorage.removeItem(usernameItem)
  localStorage.removeItem(passwordItem)
}
