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

import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { loginUrl, homeUrl } from 'utilities/appUrls'
import { setSession } from 'utilities/localStorage'

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

const theme = createTheme()

export default function Register() {
  const history = useHistory()
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)
  const [isTrue, setIsTrue] = React.useState(false)

  useEffect(() => {
    getLocation()
  }, [])

  const onFinish = async (values) => {
    try {
      setLoading(true)
      const requestOptions = {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      }
      const response = await fetch(
        process.env.REACT_APP_HOST_URL + '/api/v1/auth/signup',
        requestOptions
      )
      const data = await response.json()
      setLoading(false)
      setSession(data)
      history.push('/')
    } catch (error) {
      setLoading(false)
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
      job: {
        name: data.get('jobName'),
        description: data.get('jobDescription'),
      },
      education: {
        schoolName: data.get('schoolName'),
        schoolDegree: data.get('schoolDegree'),
        dateStarted: new Date(data.get('dateStarted')).toISOString(),
        dateFinished: new Date(data.get('dateFinished')).toISOString(),
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
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            borderRadius: '5px',
            backgroundColor: '#FFFAFA',
            opacity: 0.85,
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '25px',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
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
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='number'
                  label='Phone Number'
                  name='number'
                  type='tel'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='username'
                  label='Username'
                  type='username'
                  id='username'
                />
              </Grid>
              <Grid item xs={12}>
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
              <Grid item xs={12} justifyContent='center' alignItems='center'>
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
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              loading={loading}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent='center'>
              <Grid item>
                <Link href={loginUrl} variant='body2'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  )
}
