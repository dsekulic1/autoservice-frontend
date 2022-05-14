import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// handle the private routes
const PrivateRoute = ({
  component: Component,
  path: Path,
  loggedIn: loggedIn,
  ...rest
}) => {
  return (
    <Route
      path={Path}
      render={() =>
        loggedIn ? <Component {...rest} /> : <Redirect push to='/' />
      }
    />
  )
}

export default PrivateRoute
