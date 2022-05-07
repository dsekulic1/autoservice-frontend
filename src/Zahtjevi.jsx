import React from "react";

import Zahtjev from "./Zahtjev";

const Zahtjevi = () => {

  const zahtjevi = ["Zahtjev", "Zahtjev", "Zahtjev", "Zahtjev", "Zahtjev", "Zahtjev", "Zahtjev", "Zahtjev"];

  return <div style={{ opacity: '0.7', margin: '10px', padding: '10px', backgroundColor: 'inherit', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center'}}>
        {zahtjevi.map((zahtjev, index) => {
            return <Zahtjev zahtjev={zahtjev} rank={index+1} />
        })}
  </div>

}

export default Zahtjevi;
