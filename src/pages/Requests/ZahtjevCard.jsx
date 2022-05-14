import React, { useEffect, useState } from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Modal from '@material-ui/core/Modal'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import NativeSelect from '@material-ui/core/NativeSelect'
import moment from 'moment'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

import Divider from '@material-ui/core/Divider'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const statusi = ['ZAVRSENO', 'U_IZRADI', 'NA_CEKANJU']

const ZahtjevCard = ({ zahtjev, rjesenja, rank, user }) => {
  var FOUND = 2
  for (var i = 0; i < statusi.length; i++) {
    if (statusi[i] === zahtjev.state) {
      FOUND = i
      break
    }
  }
  console.log(rjesenja)
  const [open, setOpen] = useState(false)
  const [state, setState] = useState(statusi[FOUND])
  const [solution, setSolution] = useState()

  const handleChange = (event) => {
    setState(event.target.value)
  }

  const handleChangeSolution = (event) => {
    setSolution(event.target.value)
  }

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const date = zahtjev?.dateCreated
  const datum = moment(
    new Date(date[0], date[1], date[2], date[3], date[4])
  ).format('DD/MM/YYYY | hh:mm')

  return (
    <>
      <Box sx={{ width: '70%', bgcolor: 'background.paper' }}>
        <Box sx={{ my: 3, mx: 2 }}>
          <Grid container alignItems='center'>
            <Grid item xs>
              <Typography gutterBottom variant='h4' component='div'>
                {'Zahtjev ' + rank}
              </Typography>
            </Grid>
          </Grid>
          <Typography gutterBottom variant='h5' component='div'>
            {'Problem:'}
          </Typography>
          <Typography gutterBottom variant='h6' component='div'>
            {zahtjev?.category?.name || ''}
          </Typography>
          <Typography gutterBottom variant='h5' component='div'>
            {'Opis problema:'}
          </Typography>

          <Typography color='text.secondary' variant='body2'>
            {zahtjev.description}
          </Typography>
        </Box>
        <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
          <Button onClick={handleOpen}>Pregled zahtjeva</Button>
          <Button>Brisanje zahtjeva</Button>
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby='modal-modal-title'
              aria-describedby='modal-modal-description'
              disableEscapeKeyDown
              disableEnforceFocus
            >
              <Box sx={style}>
                <Typography id='modal-modal-title' variant='h6' component='h2'>
                  <Box sx={{ my: 3, mx: 2 }}>
                    <Grid container alignItems='center'>
                      <Grid item xs>
                        <Typography gutterBottom variant='h4' component='div'>
                          {'Zahtjev ' + rank}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Typography gutterBottom variant='h6' component='div'>
                      {zahtjev?.user?.firstName +
                        ' ' +
                        zahtjev?.user?.lastName +
                        ' | ' +
                        datum}
                    </Typography>
                    <Typography gutterBottom variant='h6' component='div'>
                      {'Problem:'}
                    </Typography>

                    <Typography
                      color='text.secondary'
                      variant='body2'
                      style={{ marginBottom: '20px' }}
                    >
                      {zahtjev?.category?.name}
                    </Typography>

                    <Typography gutterBottom variant='h6' component='div'>
                      {'Opis problema:'}
                    </Typography>

                    <Typography
                      color='text.secondary'
                      variant='body2'
                      style={{ marginBottom: '20px' }}
                    >
                      {zahtjev.description}
                    </Typography>

                    <Typography gutterBottom variant='h5' component='div'>
                      <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth style={{ marginBottom: '20px' }}>
                          <InputLabel
                            variant='standard'
                            htmlFor='uncontrolled-native'
                          >
                            Status
                          </InputLabel>
                          <Select
                            labelId='status'
                            id='status'
                            value={state}
                            onChange={handleChange}
                          >
                            {statusi.map((status) => (
                              <MenuItem key={status} value={status}>
                                {status}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>

                        <FormControl fullWidth style={{ marginBottom: '20px' }}>
                          <InputLabel
                            variant='standard'
                            htmlFor='uncontrolled-native'
                          >
                            Rješenja
                          </InputLabel>
                          <Select
                            labelId='rjesenje'
                            id='rjesenje'
                            value={solution}
                            onChange={handleChangeSolution}
                          >
                            {rjesenja.map((rjesenje) => (
                              <MenuItem key={rjesenje} value={rjesenje}>
                                {rjesenje.title}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>
                    </Typography>
                  </Box>
                </Typography>

                <Box style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    onClick={async () => {
                      //await up
                    }}
                    variant='contained'
                    style={{
                      backgroundColor: 'green',
                      display: 'flex',
                      justifyContent: 'center',
                      margin: '10px',
                    }}
                  >
                    Snimi promjene
                  </Button>
                  <Button
                    onClick={handleClose}
                    variant='contained'
                    style={{
                      backgroundColor: 'red',
                      display: 'flex',
                      justifyContent: 'center',
                      margin: '10px',
                    }}
                  >
                    Odustani
                  </Button>
                </Box>
              </Box>
            </Modal>
          </div>
        </Box>
      </Box>
      <Divider />
    </>
  )
}

export default ZahtjevCard
