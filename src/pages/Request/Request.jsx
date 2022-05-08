import React, { useState, useEffect } from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { getAllCategories } from 'api/category/category'
import { addRequest } from 'api/request/request'
import { getUser } from 'utilities/localStorage'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'

const Request = () => {
  const [kategorije, setKategorije] = useState([])
  const [user, setUser] = useState('')

  useEffect(async () => {
    try {
      setKategorije(await getAllCategories())
      setUser(getUser())
    } catch (e) {
      console.error(e)
    }
    const fetchData = async () => {}
    fetchData()
  }, [])

  const onFinish = async (values) => {
    try {
      await addRequest(values)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const category = kategorije.find(function (post, index) {
      if (post.name == data.get('category')) return true
    })

    const values = {
      description: data.get('description'),
      user: user,
      category: category,
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
      <Container
        component='form'
        onSubmit={handleSubmit}
        maxWidth='sm'
        style={{ backgroundColor: '#ffff', marginTop: '20px', padding: '20px' }}
      >
        <CssBaseline />

        <Box
          sx={{
            width: 600,
            maxWidth: '100%',
          }}
        >
          <h3
            fullWidth
            style={{
              textAlign: 'center',
              marginBottom: '2%',
              height: '4vh',
              font: 'Poppins',
              fontSize: '30px',
            }}
          >
            Novi zahtjev
          </h3>
          <p
            fullWidth
            id='fullWidth'
            style={{
              padding: '5px',
              textAlign: 'center',
              marginBottom: '2%',
              backgroundColor: '#AE2331',
              color: '#ffff',
            }}
          >
            {user.firstName + ' ' + user.lastName}
          </p>

          <p
            fullWidth
            id='fullWidth'
            style={{
              padding: '5px',
              textAlign: 'center',
              marginBottom: '2%',
              border: '1px solid',
            }}
          >
            <LocationOnIcon />
            {user.city}
          </p>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              style={{ marginTop: '3vh' }}
              id='category'
              name='category'
              select
              label='Kategorija'
              //onChange={handleChange}
              helperText='Molimo Vas izaberite kategoriju problema.'
              variant='standard'
            >
              {kategorije.map((option) => (
                <MenuItem key={option.id} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              style={{ marginTop: '3vh' }}
              id='description'
              name='description'
              label='Opis problema'
              multiline
              rows={4}
              variant='standard'
            />
            <Button
              variant='contained'
              type='submit'
              style={{
                backgroundColor: '#AE2331',
                marginTop: '10%',
                marginLeft: '35%',
                marginRight: '35%',
                color: '#ffff',
                borderRadius: '10',
              }}
            >
              Posalji
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default Request
