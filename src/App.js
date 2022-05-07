import React, { useEffect, useState } from 'react'
import './styles.css'
import Pocetna from './Pocetna'
import MojProfil from './MojProfil'
import Zahtjevi from './Zahtjevi'
import NoviZahtjev from './NoviZahtjev'
import { Route, Switch } from 'react-router-dom'
import Login from './pages/Login/Login'
import PrivateRoute from 'routing/PrivateRoute'
import WorkerRoute from 'routing/WorkerRoute'
import Register from 'pages/Register/Register'
// const useStyles = makeStyles({});

export default function App() {
  // const classes = useStyles();
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
    // <div className={classes.container}>
    <div
      style={{
        backgroundImage: `url(${'https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX37243398.jpg'})`,
      }}
    >
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
        )
        <PrivateRoute
          path='/novizahtjev'
          component={NoviZahtjev}
          logedInUser={loggedIn}
        />
        <Route path='/login' render={(props) => <Login />} />
        <Route path='/register' render={(props) => <Register />} />
      </Switch>
    </div>
  )
}
