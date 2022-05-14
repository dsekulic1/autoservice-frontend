import React, { useState, useEffect } from 'react'
import { getAllRequests } from 'api/request/request'
import { getAllSolutions } from 'api/solution/solution'
import ZahtjevCard from './ZahtjevCard'
import { useUserContext } from 'AppContext'

const Zahtjevi = () => {
  const [zahtjevi, setZahtjevi] = useState([])
  const [rjesenja, setRjesenja] = useState([])
  const { user } = useUserContext()

  useEffect(() => {
    async function fetchData() {
      try {
        setZahtjevi(await getAllRequests())
        setRjesenja(await getAllSolutions())
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
      {zahtjevi.map((zahtjev, index) => {
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

export default Zahtjevi
