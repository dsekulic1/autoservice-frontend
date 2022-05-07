
import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const kategorije = [
  {
    value: 'Kategorija 1',
    label: 'A',
  },
  {
    value: 'Kategorija 2',
    label: 'B',
  },
  {
    value: 'Kategorija 3',
    label: 'C',
  },
  {
    value: 'kategorija 4',
    label: 'D',
  },
];

const tipovi = [
  {
    value: 'Tip 1',
    label: 'A',
  },
  {
    value: 'Tip 2',
    label: 'B',
  },
  {
    value: 'Tip 3',
    label: 'C',
  },
  {
    value: 'Tip 4',
    label: 'D',
  },
];

const NoviZahtjev = props => {
  const [currency, setCurrency] = React.useState('EUR');

 // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
 //   setCurrency(event.target.value);
  //};;

  return <div style={{ backgroundColor: 'black', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', height: '100%', width: '100%'}} >
  <Box sx={{
  width: '45%',
  height: 700,
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#ffff',
  alignItems: 'center'
}} style={{marginTop:'2%', marginBottom:'2%'}}>   
<Box
sx={{
  width: 500,
  maxWidth: '100%'
}}
>
<h3 fullWidth style={{
  textAlign: 'center', marginBottom:'2%', height: '4vh', font:'Poppins', fontSize:'30px' 
}}  >Novi zahtjev</h3>
<p fullWidth id="fullWidth" style={{
  textAlign: 'center', marginBottom:'2%', 
  backgroundColor: '#AE2331', height: '4vh', color:'#ffff'
}}  value={'ime prezime'}>Ime Orezime</p>

<p fullWidth id="fullWidth" style={{
  borderColor: 'black', border: '1px solid', height: '4vh'
}}  value={'grad'}>Sarajevo</p>

<Box

   sx={{display: 'flex', flexDirection: 'row' , justifyContent: 'center'  }} style={{
    textAlign: 'center',
     height: '4vh', color:'#ffff'
     
  }}
    >
      <p id="outlined-basic" label="Outlined" style={{ borderRight:'1px solid', backgroundColor: '#AE2331',  height: '4vh', width:"40vh"}} >datum</p> 
      <p id="filled-basic" label="Filled" style={{ borderRight:'1px solid', backgroundColor: '#AE2331',  height: '4vh', width:"40vh"}} >sati</p> 
    </Box>
 <Box sx={{display:'flex', flexDirection: 'column' }}>
    <TextField style={{marginTop:'3vh'}}
          id="standard-select-currency"
          select
          label="Kategorija"
          value={currency}
          onChange={handleChange}
          helperText="Molimo Vas izaberite kategoriju problema."
          variant="standard"
        >
          {kategorije.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField style={{marginTop:'3vh'}}
          id="standard-select-currency"
          select
          label="Tip"
          value={currency}
          onChange={handleChange}
          helperText="Molimo Vas izaberite tip problema"
          variant="standard"
        >
          {tipovi.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField  style={{marginTop:'3vh'}}
          id="standard-multiline-static"
          label="Opis problema"
          multiline
          rows={4}
          variant="standard"
        />
<Button variant="contained" style={{backgroundColor: '#AE2331',marginTop:'10%', marginLeft:'35%', marginRight:'35%', color:'#ffff', borderRadius:'10'}}>Posalji</Button>
</Box>
</Box>
</Box></div>;
};

export default NoviZahtjev;
