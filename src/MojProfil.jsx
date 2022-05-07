import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const MojProfil = () => {
  return (
    <div
      style={{
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <Box
        fullWidth
        style={{
          marginLeft: '2%',
          borderBottom: ' 1px solid',
          borderColor: '#ffff',
          height: '5vh',
        }}
      >
        <p
          style={{
            width: '10vh',
            color: '#ffff',
            borderBottom: ' 5px solid',
            borderColor: 'red',
          }}
          value={'Mojprofil'}
        >
          Moj Profil
        </p>
      </Box>
      <Box
        style={{
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
        }}
      >
        <div>
          <FormControl style={{ width: '60vh', marginTop: '5%' }}>
            <TextField
              id='outlined-read-only-input'
              label='Ime'
              defaultValue='Mirnesa'
              InputProps={{
                readOnly: true,
              }}
              style={{
                backgroundColor: '#a7a3a3',
                marginTop: '4%',
                padding: '1%',
              }}
              focused
              sx={{ height: '50vh' }}
            />
            <TextField
              id='outlined-read-only-input'
              label='Prezime'
              defaultValue='Salihovic'
              InputProps={{
                readOnly: true,
              }}
              style={{
                backgroundColor: '#a7a3a3',
                marginTop: '4%',
                padding: '1%',
              }}
              focused
              sx={{ height: '50vh' }}
            />
            <TextField
              id='outlined-read-only-input'
              label='Email'
              defaultValue='email@hotmail.com'
              InputProps={{
                readOnly: true,
              }}
              style={{
                backgroundColor: '#a7a3a3',
                marginTop: '4%',
                padding: '1%',
              }}
              sx={{ height: '50vh' }}
            />

            <TextField
              id='outlined-input'
              label='Mobitel'
              type='phone'
              defaultValue='000-000-000'
              InputLabelProps={{
                shrink: true,
              }}
              style={{
                backgroundColor: '#a7a3a3',
                marginTop: '4%',
                padding: '2%',
              }}
              focused
              sx={{ height: '50vh' }}
            />
            <Button
              variant='contained'
              style={{
                backgroundColor: '#AE2331',
                marginTop: '10%',
                marginLeft: '70%',
                color: '#ffff',
                borderRadius: '10',
              }}
            >
              UREDI
            </Button>
          </FormControl>
        </div>
      </Box>
    </div>
  )
}

export default MojProfil
