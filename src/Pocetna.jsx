import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

const Pocetna = () => {


  return <div style={{ backgroundColor: 'inherit', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', height: '100vh'}} >
    <Box sx={{
    width: 400,
    height: 400,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#a7a3a3',
    borderRadius: 20,
  }}>pocetna</Box>

  <Box sx={{
    width: 400,
    height: 400,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#a7a3a3',
    borderRadius: 20,
  }}>pocetna1</Box>

  <Box sx={{
    width: 400,
    height: 400,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#a7a3a3',
    borderRadius: 20,
  }}>pocetna2</Box>
  

  </div>;

  
};

export default Pocetna;