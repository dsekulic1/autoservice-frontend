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
import PocetnaHome from 'PocetnaHome'
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
        backgroundImage: `url(${'https://thumbs.dreamstime.com/b/real-line-fire-flames-reflection-isolated-black-background-mockup-black-wall-fire-real-fire-line-flames-120450057.jpg'})`,
        width: '100%',
        height: '90%',
      }}
    >
      <Switch>
        <Route exact from='/' render={(props) => <Pocetna {...props} />} />
        <PrivateRoute
          path='/mojprofil'
          component={MojProfil}
          logedInUser={loggedIn}
        />
         <PrivateRoute
          path='/pocetnaHome'
          component={PocetnaHome}
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
