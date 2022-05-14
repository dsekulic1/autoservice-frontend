import React, { useState, useEffect } from 'react'
import { getAllRequests } from 'api/request/request'
import { getAllSolutions } from 'api/solution/solution'
import ZahtjevCard from './ZahtjevCard'
import { useUserContext } from 'AppContext'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { makeStyles } from '@material-ui/core'

const Zahtjevi = () => {
  const [zahtjevi, setZahtjevi] = useState([])
  const [prikaz, setPrikaz] = useState([])
  const [rjesenja, setRjesenja] = useState([])
  const [value, setValue] = useState('NA_CEKANJU')
  const { user } = useUserContext()
  const classes = useStyles()

  const handleChange = (event, newValue) => {
    setValue(newValue)
    const data = zahtjevi.filter((zahtjev) => zahtjev.state === newValue)
    setPrikaz(data)
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getAllRequests()
        setZahtjevi(response)
        setRjesenja(await getAllSolutions())
        const data = response.filter(
          (zahtjev) => zahtjev.state === 'NA_CEKANJU'
        )
        setPrikaz(data)
      } catch (e) {
        console.error(e)
      }
    }
    fetchData()
  }, [])

  return (
    <div
      style={{
        opacity: '0.7',
        padding: '10px',
        backgroundColor: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '70%',
          typography: 'body1',
          backgroundColor: 'white',
          marginBottom: '10px',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='wrapped label tabs example'
          classes={{ indicator: classes.customStyleOnActiveTab }}
          TabIndicatorProps={{
            style: {
              backgroundColor: '#AE2331',
              fontWeight: 'bold',
              fontColor: 'black',
            },
          }}
        >
          <Tab
            value='NA_CEKANJU'
            label={
              <span
                className={
                  value === 'NA_CEKANJU'
                    ? classes.activeTab
                    : classes.customStyleOnTab
                }
              >
                Na čekanju
              </span>
            }
          />
          <Tab
            value='U_IZRADI'
            label={
              <span
                className={
                  value === 'U_IZRADI'
                    ? classes.activeTab
                    : classes.customStyleOnTab
                }
              >
                U izradi
              </span>
            }
          />
          <Tab
            value='ZAVRSENO'
            label={
              <span
                className={
                  value === 'ZAVRSENO'
                    ? classes.activeTab
                    : classes.customStyleOnTab
                }
              >
                Završeno
              </span>
            }
          />
        </Tabs>
      </Box>
      {prikaz.map((zahtjev, index) => {
        return (
          <ZahtjevCard
            zahtjev={zahtjev}
            rjesenja={rjesenja}
            rank={index + 1}
            user={user}
          />
        )
      })}
    </div>
  )
}

const useStyles = makeStyles({
  customStyleOnTab: {
    fontSize: '15px',
    color: 'black',
  },
  customStyleOnActiveTab: {
    color: 'black',
  },
  activeTab: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#AE2331',
  },
})

export default Zahtjevi
