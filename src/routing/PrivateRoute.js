import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// handle the private routes
const PrivateRoute = ({
  component: Component,
  path: Path,
  logedInUser: logedInUser,
  ...rest
}) => {
  return (
    <Route
      path={Path}
      render={() =>
        logedInUser ? <Component {...rest} /> : <Redirect push to='/' />
      }
    />
  )
}

export default PrivateRoute
