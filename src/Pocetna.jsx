import React from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

import Link from '@material-ui/core/Link'
const Pocetna = () => {
  return (
    <div
      style={{
        backgroundColor: 'black',
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        height: '100vh',
        borderRadius: "1px solid white"
      }}
    >
     <Box  sx={{
          width: '80%',
          height: '20%',
          paddingLeft:"10%",
          backgroundColor:'black',
          color: 'white'}} >
            <h3>Hi there!</h3>
            <h1 style={{fontSize:'30px'}} >Dobro dosli na nasu stranicu!</h1>
            <h4>Ako vam je potrebna pomoc prijavi se i pronadite odgovor na svoje pitanje</h4>
            <Button
              style={{backgroundColor: '#AE2331',  width:'20%', color:'#ffff', borderRadius:'1px'}}>
              <Link  style={{ width:'100%', color:'#ffff',}} href="http://localhost:3000/register">Registuj se</Link>  
            </Button>
          </Box>
      <Box
        sx={{
          width: '45%',
          height: '50%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: `url(${"https://img.freepik.com/free-vector/auto-repair-car-service-logo_304830-262.jpg"})`,
          backgroundColor: '#a7a3a3',
          
        }}
      >
        ZAHTJEVI
      </Box>
    </div>
  )
}

export default Pocetna
