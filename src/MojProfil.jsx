import React, { useEffect, useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import FormLabel from '@mui/material/FormLabel'
import Container from '@mui/material/Container'
import Button from '@material-ui/core/Button'
import { removeSession, setSession } from 'utilities/localStorage'
import { useHistory } from 'react-router-dom'
import { useUserContext } from 'AppContext'
import CircularProgress from '@mui/material/CircularProgress'

const MojProfil = () => {
  const history = useHistory()
  const { role } = useUserContext()
  const [user, setUser] = useState()
  const [job, setJob] = useState('')
  const [education, setEducation] = useState('')
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    const loggedInUser = localStorage.getItem('autoservice-session')
    if (loggedInUser) {
      let mydata = JSON.parse(loggedInUser)
      setUser(mydata)
      setLat(mydata.locationLatitude)
      setLng(mydata.locationLongitude)
      setJob(mydata.job)
      setEducation(mydata.education)
    }
    setLoading(false)
  }, [])

  const onFinish = async (values) => {
    try {
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      }
      const response = await fetch(
        process.env.REACT_APP_HOST_URL + '/api/v1/auth/update-profile',
        requestOptions
      )
      const data = await response.json()
      removeSession()
      setSession(data)
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    const value = event.target.value
    setUser({
      ...user,
      [event.target.name]: value,
    })
  }

  const handleChangeEducation = (event) => {
    const value = event.target.value
    setEducation({
      ...education,
      [event.target.name]: value,
    })
  }

  const handleChangeJob = (event) => {
    const value = event.target.value
    setJob({
      ...education,
      [event.target.name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
    const data = new FormData(event.currentTarget)
    const values = {
      id: user.id,
      username: data.get('username'),
      password: data.get('password'),
      city: data.get('city'),
      locationLongitude: !status ? lng : -9999,
      locationLatitude: !status ? lat : -9999,
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      number: data.get('number'),
      role: role,
      job: {
        id: job.id,
        name: job.name,
        description: job.description,
      },
      education: {
        id: education.id,
        schoolName: data.get('schoolName'),
        schoolDegree: data.get('schoolDegree'),
        dateStarted: new Date(data.get('dateStarted')).toISOString(),
        dateFinished: new Date(data.get('dateFinished')).toISOString(),
      },
    }
    onFinish(values)
  }

  let inputStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '2px solid white',
  }

  if (role === 'ROLE_USER') {
    inputStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: '2px solid white',
      height: '100vh',
    }
  }
  return loading ? (
    <CircularProgress />
  ) : (
    <div style={inputStyle}>
      <Container component='main' maxWidth='md'>
        <CssBaseline />
        <Box
          sx={{
            borderRadius: '5px',
            backgroundColor: '#FFFAFA',
            opacity: 0.9,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '25px',
          }}
        >
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2} marginBottom='10px'>
              <Grid item xs={12} sm={6}>
                <TextField
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                  value={user?.firstName || ''}
                  onChange={handleChange}
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
                  value={user?.lastName || ''}
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  value={user?.email || ''}
                  onChange={handleChange}
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
                  value={user?.number || ''}
                  onChange={handleChange}
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
                  onChange={handleChange}
                  value={user?.username || ''}
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
                  value={user?.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='city'
                  label='City'
                  id='city'
                  onChange={handleChange}
                  value={user?.city || ''}
                />
              </Grid>
              {role === 'ROLE_WORKER' && (
                <>
                  <Grid item xs={12}>
                    <FormLabel sx={{ color: 'blue' }}>Job</FormLabel>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name='name'
                      required
                      fullWidth
                      id='jobName'
                      label='Job Name'
                      value={job.name || ''}
                      onChange={handleChangeJob}
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name='description'
                      required
                      fullWidth
                      id='jobDescription'
                      label='Job description'
                      value={job.description}
                      onChange={handleChangeJob}
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
                      value={education.schoolName || ''}
                      onChange={handleChangeEducation}
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
                      value={education.schoolDegree || ''}
                      onChange={handleChangeEducation}
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id='dateStarted'
                      name='dateStarted'
                      label='Started'
                      onChange={handleChangeEducation}
                      type='datetime-local'
                      fullWidth
                      value={education.dateStarted || ''}
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
                      onChange={handleChangeEducation}
                      type='datetime-local'
                      fullWidth
                      value={education.dateFinished || ''}
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
              variant='contained'
              style={{
                backgroundColor: '#AE2331',
                marginLeft: '30%',
                width: '40%',
                color: '#ffff',
                borderRadius: '10',
              }}
              sx={{ mt: 3, mb: 2 }}
            >
              Uredi
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default MojProfil
