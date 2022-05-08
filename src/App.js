import React, { useEffect, useState } from 'react'
import Pocetna from './Pocetna'
import MojProfil from './MojProfil'
import Zahtjevi from './Zahtjevi'
import NoviZahtjev from './NoviZahtjev'
import { Route, Switch } from 'react-router-dom'
import Login from './pages/Login/Login'
import PrivateRoute from 'routing/PrivateRoute'
import WorkerRoute from 'routing/WorkerRoute'
import Register from 'pages/Register/Register'

import './styles.css'
import './App.css'
import Request from 'pages/Request/Request'

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [role, setRole] = useState('ROLE_USER')
  useEffect(() => {
    const loggedInUser = localStorage.getItem('autoservice-session')
    if (loggedInUser) {
      var mydata = JSON.parse(loggedInUser)
      setRole(mydata.roles[0])
      setLoggedIn(true)
    }
  })

  return (
    <div className='app-bg'>
      <Switch>
        <Route exact from='/' render={(props) => <Pocetna {...props} />} />

        <PrivateRoute
          path='/mojprofil'
          component={MojProfil}
          logedInUser={loggedIn}
        />
        <WorkerRoute
          path='/pregledzahtjeva'
          component={Zahtjevi}
          logedInUser={loggedIn}
          role={role}
        />
        <PrivateRoute
          path='/novizahtjev'
          component={Request}
          logedInUser={loggedIn}
        />

        <Route path='/login' render={() => <Login />} />
        <Route path='/register' render={() => <Register />} />
      </Switch>
    </div>
  )
}
