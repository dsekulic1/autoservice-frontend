import { getUser } from 'utilities/localStorage'

export const validUser = () => {
  const user = getUser()

  if (user != null) return true

  return false
}
