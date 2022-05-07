import React from "react";
import FormControl from '@material-ui/core/FormControl';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const UposlenikProfil = () => {
  return <div style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center', height: '100vh', flexDirection: 'column', width: '100%', }} >
  <Box fullWidth style={{marginLeft:'2%', borderBottom:' 1px solid', borderColor: '#ffff', height:'5vh' }}  >
      <p  style={{ width:"10vh", color:'#ffff',borderBottom:' 5px solid', borderColor: 'red' }}  value={'Mojprofil'}
        >Moj Profil</p>
</Box>
<Box  style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center', height: '80%', width: '100%'}}>
<FormControl style={{  width: '60%', marginTop:'5%' }}>
    <div fullWidth style={{display: 'flex', justifyContent: 'center' }} >
<Box  style={{ marginRight: '5vh' ,  width: '50%'}} >
  <TextField  
          id="outlined-read-only-input"
          label="Ime"
          defaultValue="Mirnesa"
          InputProps={{
            readOnly: true,
          }}
          style={{ backgroundColor:'#a7a3a3', marginTop:'4%', padding:'1%'  }}
          focused 
          fullWidth
          sx={{ height:'50vh' }}
        />
          <TextField  fullWidth
          id="outlined-read-only-input"
          label="Prezime"
          defaultValue="Salihovic"
          InputProps={{
            readOnly: true,
          }}
          style={{ backgroundColor:'#a7a3a3', marginTop:'4%', padding:'1%'}}
          focused 
          sx={{ height:'50vh'}}
        />
                  <TextField 
          id="outlined-read-only-input"
          label="Email"
          defaultValue="email@hotmail.com"
          InputProps={{
            readOnly: true,
          }}
          style={{ backgroundColor:'#a7a3a3', marginTop:'4%', padding:'1%'}}
          focused 
          sx={{ height:'50vh'}}
          fullWidth
        />
   <TextField 
          id="outlined-input"
          label="Broj"
          type='text'
          defaultValue="000-000-000"
          InputLabelProps={{
            shrink: true,
          }}
          style={{ backgroundColor:'#a7a3a3', marginTop:'4%', padding:'2%' }}
          focused 
          fullWidth
          sx={{ height:'50vh'}}
        />
           <TextField 
          id="outlined-input"
          label="Location"
          type='email'
          defaultValue="Sarajevo"
          InputLabelProps={{
            shrink: true,
          }}
          style={{ backgroundColor:'#a7a3a3', marginTop:'4%', padding:'2%' }}
          focused 
          sx={{ height:'50vh'}}
          fullWidth
        />
        </Box>
        <Box style={{ width: '50%'}}>
           <TextField 
          id="outlined-input"
          label="Naziv autoservisa"
          type='ime autoservisa'
          defaultValue="000-000-000"
          InputLabelProps={{
            shrink: true,
          }}
          style={{ backgroundColor:'#a7a3a3', marginTop:'4%', padding:'2%' }}
          focused 
          sx={{ height:'50vh'}}
          fullWidth
        />

      < TextField 
          id="outlined-input"
          label="Naziv pozicije"
          type='ime autoservisa'
          defaultValue="000-000-000"
          InputLabelProps={{
            shrink: true,
          }}
          style={{ backgroundColor:'#a7a3a3', marginTop:'4%', padding:'2%' }}
          focused 
          sx={{ height:'50vh'}}
          fullWidth
        />

      <TextField 
          id="outlined-input"
          label="Radno iskustvo"
          type='number'
          defaultValue=""
          multiline
          rows={4}
          InputLabelProps={{
            shrink: true,
          }}
          style={{ backgroundColor:'#a7a3a3', marginTop:'4%', padding:'2%' }}
          focused 
          sx={{ height:'50vh'}}
          fullWidth
        />

<Button variant="contained" style={{backgroundColor: '#AE2331',marginTop:'10%', marginLeft:'60%',  width:'40%', color:'#ffff', borderRadius:'10'}}>UREDI</Button>
</Box>
</div>
</FormControl>

</Box>
</div>
};

export default UposlenikProfil;
