import React, { createContext, useContext, useState } from 'react'
import { validUser } from 'utilities/common'

export const UserContext = createContext({})

export const useUserContext = () => useContext(UserContext)

export const AppProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(validUser())

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </UserContext.Provider>
  )
}
