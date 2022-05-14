import React, { useState, useEffect } from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { addCategory, getAllCategories } from 'api/category/category'
import { addRequest } from 'api/request/request'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import { useUserContext } from 'AppContext'
import FormControl from '@material-ui/core/FormControl'
import Modal from '@mui/material/Modal'
import ButtonGroup from '@mui/material/ButtonGroup'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
}

const Request = () => {
  const [kategorije, setKategorije] = useState([])
  const { user, location } = useUserContext()
  const [kategorija, setKategorija] = useState()
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState()

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (event) => {
    event.preventDefault()
    setKategorija(event.target.value)
    if (event.target.value === 'new') {
      setOpen(true)
    }
  }

  const handleModaleChange = (event) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setKategorije(await getAllCategories())
      } catch (e) {
        console.error(e)
      }
    }
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
    const category = kategorije.find(function (post) {
      if (post.name === data.get('category')) return true
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
            {user}
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
            {location}
          </p>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <FormControl fullWidth style={{ marginBottom: '20px' }}>
              <TextField
                style={{ marginTop: '3vh' }}
                id='category'
                name='category'
                select
                label='Kategorija'
                value={kategorija}
                onChange={handleChange}
                helperText='Molimo Vas izaberite kategoriju problema.'
                variant='standard'
              >
                {kategorije.map((option) => (
                  <MenuItem key={option.id} value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
                <MenuItem key={'new'} value={'new'}>
                  {'Dodajte novu kategoriju..'}
                </MenuItem>
              </TextField>
            </FormControl>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby='modal-modal-title'
              aria-describedby='modal-modal-description'
            >
              <Box sx={style}>
                <FormControl fullWidth style={{ marginBottom: '20px' }}>
                  <TextField
                    onChange={handleModaleChange}
                    id='nova'
                    name='nova'
                    label='Dodajte novu kategoriju..'
                    variant='outlined'
                    autoFocus
                  ></TextField>
                  <ButtonGroup
                    style={{
                      maringLeft: '20%',
                    }}
                  >
                    <Button
                      variant='contained'
                      onClick={async (event) => {
                        event.preventDefault()

                        const values = {
                          name: value,
                        }
                        const response = await addCategory(values)
                        kategorije.push(response)
                        handleClose()
                      }}
                      style={{
                        backgroundColor: 'green',
                        marginTop: '10%',
                        maringLeft: '20px',
                        color: '#ffff',
                        borderRadius: '10',
                      }}
                    >
                      Dodaj
                    </Button>
                    <Button
                      variant='contained'
                      onClick={() => {
                        handleClose()
                      }}
                      style={{
                        backgroundColor: '#AE2331',
                        marginTop: '10%',

                        color: '#ffff',
                        borderRadius: '10',
                      }}
                    >
                      Odustani
                    </Button>
                  </ButtonGroup>
                </FormControl>
              </Box>
            </Modal>

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
