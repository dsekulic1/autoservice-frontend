import React from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import { useUserContext } from 'AppContext'
import Link from '@material-ui/core/Link'

const Pocetna = () => {
  const history = useHistory()
  const { loggedIn } = useUserContext()

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
      <Box
        sx={{
          width: '80%',
          height: '20%',
          paddingLeft: '10%',
          color: 'white',
        }}
      >
        <h3>Hi there!</h3>
        <h1 style={{ fontSize: '30px' }}>Dobro došli na našu stranicu!</h1>
        <h4>
          Ako vam je potrebna pomoć prijavi se i pronađite odgovor na svoje
          pitanje
        </h4>
        {!loggedIn && (
          <Button
            style={{
              backgroundColor: '#AE2331',
              width: '20%',
              color: '#ffff',
              borderRadius: '1px',
            }}
          >
            <Link
              style={{ width: '100%', color: '#ffff' }}
              onClick={() => history.push('/register')}
            >
              Registuj se
            </Link>
          </Button>
        )}
      </Box>
    </div>
  )
}

export default Pocetna
