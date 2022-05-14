import React from 'react'
import { useHistory } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { registerUrl, homeUrl } from 'utilities/appUrls'
import {
  getRememberInfo,
  removeRememberInfo,
  setRememberInfo,
  setSession,
} from 'utilities/localStorage'
import { useUserContext } from 'AppContext'
import { login } from 'api/user/auth'

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href={homeUrl}>
        autoservice{' '}
      </Link>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const SignIn = () => {
  const history = useHistory()
  const rememberInfo = getRememberInfo()
  const [isTrue, setIsTrue] = React.useState(false)
  const { setLoggedIn, setUser, setRole, setLocation } = useUserContext()

  const onFinish = async (values) => {
    try {
      const response = await login(values)
      setSession(response)
      setRole(response.roles[0])
      setLoggedIn(true)
      setUser(response.firstName + ' ' + response.lastName)
      setLocation(response.city)
      if (isTrue) {
        setRememberInfo(values.username, values.password)
      } else {
        removeRememberInfo()
      }
      history.goBack()
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const values = {
      username: data.get('username'),
      password: data.get('password'),
    }
    onFinish(values)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        borderRadius: '1px solid white',
      }}
    >
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            borderRadius: '5px',
            backgroundColor: '#FFFAFA',
            opacity: 0.85,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '25px',
            borderRadius: '1px',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#AE2331' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit}
            initialValues={{
              username: rememberInfo?.username,
              password: rememberInfo?.password,
              remember: true,
            }}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin='normal'
              required
              fullWidth
              id='username'
              label='Username'
              name='username'
              autoComplete='username'
              value={rememberInfo?.username}
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              value={rememberInfo?.password}
              autoComplete='password'
            />
            <FormControlLabel
              control={
                <Checkbox
                  value='remember'
                  valuePropName='checked'
                  color='primary'
                  checked={isTrue}
                  onChange={(e) => {
                    setIsTrue(e.target.checked)
                  }}
                />
              }
              label='Remember me'
            />

            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor: '#AE2331',
                marginTop: '10%',
                marginLeft: '30%',
                width: '40%',
                color: '#ffff',
                borderRadius: '10',
              }}
            >
              Log In
            </Button>
            <Grid container justifyContent='center'>
              <Grid item>
                <Link href={registerUrl} style={{ color: 'black' }}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </div>
  )
}

export default SignIn
