import React, { createContext, useContext, useState } from 'react'
import {
  userDetails,
  userRole,
  validUser,
  userLocation,
} from 'utilities/common'

export const UserContext = createContext({})

export const useUserContext = () => useContext(UserContext)

export const AppProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(validUser())
  const [user, setUser] = useState(userDetails())
  const [role, setRole] = useState(userRole())
  const [location, setLocation] = useState(userLocation())

  return (
    <UserContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        user,
        setUser,
        role,
        setRole,
        location,
        setLocation,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
