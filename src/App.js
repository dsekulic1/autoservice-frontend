import React from 'react'
import Pocetna from './Pocetna'
import MojProfil from './MojProfil'
import Zahtjevi from './Zahtjevi'
import { Route, Switch } from 'react-router-dom'
import Login from './pages/Login/Login'
import PrivateRoute from 'routing/PrivateRoute'
import WorkerRoute from 'routing/WorkerRoute'
import Register from 'pages/Register/Register'
import { useUserContext } from 'AppContext'

import './styles.css'
import './App.css'
import Request from 'pages/Request/Request'

export default function App() {
  const { loggedIn, role } = useUserContext()

  return (
    <div className='app-bg'>
      <Switch>
        <Route exact from='/' render={(props) => <Pocetna {...props} />} />

        <PrivateRoute
          path='/mojprofil'
          component={MojProfil}
          loggedIn={loggedIn}
        />
        <WorkerRoute
          path='/pregledzahtjeva'
          component={Zahtjevi}
          loggedIn={loggedIn}
          role={role}
        />
        <PrivateRoute
          path='/novizahtjev'
          component={Request}
          loggedIn={loggedIn}
        />

        <Route path='/login' render={() => <Login />} />
        <Route path='/register' render={() => <Register />} />
      </Switch>
    </div>
  )
}
