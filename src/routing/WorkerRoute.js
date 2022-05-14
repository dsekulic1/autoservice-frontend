import React from 'react'
import { Route } from 'react-router-dom'

// handle the private routes
const WorkerRoute = ({
  component: Component,
  path: Path,
  logedInUser: logedInUser,
  role: role,
  ...rest
}) => {
  return (
    <Route
      path={Path}
      render={() =>
        logedInUser && role === 'ROLE_WORKER' ? <Component {...rest} /> : <></>
      }
    />
  )
}

export default WorkerRoute
