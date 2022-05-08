import React, { createContext, useContext, useState } from 'react'
import { validUser } from 'utilities/common'

export const UserContext = createContext({})

export const useUserContext = () => useContext(UserContext)

export const AppProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(validUser())

  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </UserContext.Provider>
  )
}
