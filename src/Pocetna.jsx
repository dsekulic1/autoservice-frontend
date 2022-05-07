import React from 'react'
import Box from '@material-ui/core/Box'

const Pocetna = () => {
  return (
    <div
      style={{
        backgroundColor: 'inherit',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          width: 400,
          height: 400,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#a7a3a3',
          transparent: '25%',
          borderRadius: 20,
        }}
      >
        MOJ PROFIL
      </Box>
      <Box
        sx={{
          width: 400,
          height: 400,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#a7a3a3',
          opacity: '0.8',
          borderRadius: 20,
        }}
      >
        pocetna1
      </Box>

      <Box
        sx={{
          width: 400,
          height: 400,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#a7a3a3',
          borderRadius: 20,
        }}
      >
        ZAHTJEVI
      </Box>
    </div>
  )
}

export default Pocetna
