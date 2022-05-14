import { getUser } from 'utilities/localStorage'

export const validUser = () => {
  const user = getUser()

  if (user != null) return true

  return false
}

export const userDetails = () => {
  const user = getUser()

  if (user != null) return user.firstName + ' ' + user.lastName

  return ''
}

export const userRole = () => {
  const user = getUser()

  if (user != null) return user.roles[0]

  return ''
}

export const userLocation = () => {
  const user = getUser()

  if (user != null) return user.city

  return ''
}
