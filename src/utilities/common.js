export const validUser = () => {
  const loggedInUser = localStorage.getItem('autoservice-session')
  if (loggedInUser != null) return true

  return false
}
