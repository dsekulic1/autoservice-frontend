import React, { useEffect, useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { withRouter } from 'react-router-dom'
import { removeSession } from 'utilities/localStorage'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { getUser } from 'utilities/localStorage'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      flexGrow: 1,
    },
  },
  headerOptions: {
    color: 'white',
    display: 'flex',
    flex: 1,
    justifyContent: 'right',
  },
}))

const Header = (props) => {
  const history = useHistory()
  const user = getUser()
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const [loggedIn, setLoggedIn] = useState(false)
  const [role, setRole] = useState('ROLE_USER')
  const handleLogout = () => {
    setLoggedIn(false)
    removeSession()
    history.push('/')
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem('autoservice-session')
    if (loggedInUser) {
      var mydata = JSON.parse(loggedInUser)
      setRole(mydata.roles[0])
      setLoggedIn(true)
    }
  }, [user])
  useEffect(() => {
    const log = localStorage.getItem('autoservice-session')
    if (log) {
      setLoggedIn(true)
    }
  }, [role])
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClick = (pageURL) => {
    history.push(pageURL)
    setAnchorEl(null)
  }

  const handleButtonClick = (pageURL) => {
    history.push(pageURL)
  }

  const menuItems = [
    {
      menuTitle: 'Pocetna',
      pageURL: '/',
    },
    {
      menuTitle: 'Moj profil',
      pageURL: '/mojprofil',
    },
    {
      menuTitle: 'Pregled zahtjeva',
      pageURL: '/pregledzahtjeva',
    },
    {
      menuTitle: 'Novi zahtjev',
      pageURL: '/novizahtjev',
    },
    {
      menuTitle: 'Prijava',
      pageURL: '/login',
    },
    {
      menuTitle: 'Home',
      pageURL: '/pocetnaHome',
    },
  ]

  return (
    <div className={classes.root}>
      <AppBar position='sticky' style={{ backgroundColor: 'black' }}>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            <div>
              <img
                src={
                  'https://img.freepik.com/free-vector/auto-repair-car-service-logo_304830-262.jpg'
                }
                style={{ height: '8%', width: '15%' }}
                alt='BigCo Inc. logo'
              />
            </div>
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge='start'
                className={classes.menuButton}
                color='inherit'
                aria-label='menu'
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map((menuItem) => {
                  const { menuTitle, pageURL } = menuItem
                  return (
                    <MenuItem onClick={() => handleMenuClick(pageURL)}>
                      {menuTitle}
                    </MenuItem>
                  )
                })}
              </Menu>
            </>
          ) : (
            <div className={classes.headerOptions}>
              {loggedIn ? (
                <>
                  <Button
                    style={{ borderRadius: '0', borderLeft: '1px solid white' }}
                    variant='text'
                    color='inherit'
                    onClick={() => handleButtonClick('/')}
                  >
                    POČETNA
                  </Button>

                  <Button
                    style={{ borderRadius: '0', borderLeft: '1px solid white' }}
                    variant='text'
                    color='inherit'
                    onClick={() => handleButtonClick('/mojprofil')}
                  >
                    MOJ PROFIL
                  </Button>

                  {role === 'ROLE_WORKER' && (
                    <Button
                      style={{
                        borderRadius: '0',
                        borderLeft: '1px solid white',
                      }}
                      variant='text'
                      color='inherit'
                      onClick={() => handleButtonClick('/pregledzahtjeva')}
                    >
                      PREGLED ZAHTJEVA
                    </Button>
                  )}
                  <Button
                    style={{ borderRadius: '0', borderLeft: '1px solid white' }}
                    variant='text'
                    color='inherit'
                    onClick={() => handleButtonClick('/novizahtjev')}
                  >
                    NOVI ZAHTJEV
                  </Button>

                  <Button
                    style={{
                      borderRadius: '0',
                      borderRight: '1px solid white',
                      borderLeft: '1px solid white',
                    }}
                    variant='text'
                    color='inherit'
                    onClick={handleLogout}
                  >
                    ODJAVI SE
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    style={{ borderRadius: '0', borderLeft: '1px solid white' }}
                    variant='text'
                    color='inherit'
                    onClick={() => handleButtonClick('/')}
                  >
                    POČETNA
                  </Button>
                  <Button
                    style={{
                      borderRadius: '0',
                      borderLeft: '1px solid white',
                    }}
                    variant='text'
                    color='inherit'
                    onClick={() => handleButtonClick('/login')}
                  >
                    PRIJAVA
                  </Button>
                </>
              )}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withRouter(Header)
