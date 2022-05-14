import { useHistory } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormLabel from '@mui/material/FormLabel'
import FormControlLabel from '@mui/material/FormControlLabel'
import { signUp } from 'api/user/auth'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { loginUrl, homeUrl } from 'utilities/appUrls'
import { setSession } from 'utilities/localStorage'
import { useUserContext } from 'AppContext'

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

export default function Register() {
  const history = useHistory()
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)
  const [status, setStatus] = useState(null)
  const [isTrue, setIsTrue] = React.useState(false)
  const { setLoggedIn, setUser, setRole, setLocation } = useUserContext()

  useEffect(() => {
    getLocation()
  }, [])

  const onFinish = async (values) => {
    try {
      const response = await signUp(values)
      setSession(response)
      setRole(response.roles[0])
      setLoggedIn(true)
      setUser(response.firstName + ' ' + response.lastName)
      setLocation(response.city)
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const values = {
      username: data.get('username'),
      password: data.get('password'),
      city: data.get('city'),
      locationLongitude: !status ? lng : -9999,
      locationLatitude: !status ? lat : -9999,
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      number: data.get('number'),
      repairer: isTrue,
      job: isTrue
        ? {
            name: data.get('jobName'),
            description: data.get('jobDescription'),
          }
        : {
            name: 'user',
            description: 'userNotWorker',
          },
      education: isTrue
        ? {
            schoolName: data.get('schoolName'),
            schoolDegree: data.get('schoolDegree'),
            dateStarted: new Date(data.get('dateStarted')).toISOString(),
            dateFinished: new Date(data.get('dateFinished')).toISOString(),
          }
        : {
            schoolName: 'user',
            schoolDegree: 'userDiploma',
            dateStarted: new Date(Date.now()).toISOString(),
            dateFinished: new Date(Date.now()).toISOString(),
          },
    }
    onFinish(values)
  }

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser')
    } else {
      setStatus('Locating...')
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null)
          setLat(position.coords.latitude)
          setLng(position.coords.longitude)
        },
        () => {
          setStatus('Unable to retrieve your location')
        }
      )
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '2px solid white',
      }}
    >
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            backgroundColor: '#FFFAFA',
            opacity: 0.85,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '25px',
            width: 500,
            borderRadius: '1px',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#AE2331' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 2 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='lastName'
                  label='Last Name'
                  name='lastName'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='number'
                  label='Phone Number'
                  name='number'
                  type='tel'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name='username'
                  label='Username'
                  type='username'
                  id='username'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='city'
                  label='City'
                  id='city'
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value='worker'
                      valuePropName='checked'
                      color='primary'
                      checked={isTrue}
                      onChange={(e) => {
                        setIsTrue(e.target.checked)
                      }}
                    />
                  }
                  label='Worker'
                />
              </Grid>
              {isTrue && (
                <>
                  <Grid item xs={12}>
                    <FormLabel sx={{ color: 'blue' }}>Job</FormLabel>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name='jobName'
                      required
                      fullWidth
                      id='jobName'
                      label='Job Name'
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name='jobDescription'
                      required
                      fullWidth
                      id='jobDescription'
                      label='Job description'
                      autoFocus
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormLabel sx={{ color: 'blue' }}>Education</FormLabel>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name='schoolName'
                      required
                      fullWidth
                      id='schoolName'
                      label='School Name'
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name='schoolDegree'
                      required
                      fullWidth
                      id='schoolDegree'
                      label='School Degree'
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id='dateStarted'
                      name='dateStarted'
                      label='Started'
                      type='datetime-local'
                      defaultValue='2017-05-24T10:30'
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id='dateFinished'
                      name='dateFinished'
                      label='Ended'
                      type='datetime-local'
                      defaultValue='2017-05-24T10:30'
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                </>
              )}
            </Grid>
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
              Sign Up
            </Button>
            <Grid container justifyContent='center'>
              <Grid item>
                <Link
                  href={loginUrl}
                  variant='body2'
                  style={{ color: 'black' }}
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </div>
  )
}
