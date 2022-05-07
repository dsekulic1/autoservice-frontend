import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Modal from '@material-ui/core/Modal';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";

import Divider from "@material-ui/core/Divider";


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
  };

  const kategorije = ["Kategorija", "Kategorija", "Kategorija", "Kategorija"];
  const status = ["Status", "Status", "Status", "Status"];
  const rjesenja = ["Rješenje", "Rješenje", "Rješenje", "Rješenje"];

const Zahtjev = props => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return   <>
  {/* <Box sx={{
    width: 1000,
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C7D66D',
    transparent: '25%',
  }}>{props.zahtjev + ' ' + props.rank}</Box>
  <Divider/> */}

<Box sx={{ width: '70%', bgcolor: 'background.paper' }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
                {props.zahtjev + ' ' + props.rank}
            </Typography>
          </Grid>
        </Grid>
        <Typography gutterBottom variant="h5" component="div">
                {'Kategorija: Mehanički kvar'}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
                {'Ime prezime | 24.4.2022. | 09:00am'}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
                {'Opis problema:'}
        </Typography>

        <Typography color="text.secondary" variant="body2">
          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
          just down the hall.
        </Typography>
      </Box>
      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
        <Button onClick={handleOpen}>Pregled zahtjeva</Button>
        <Button>Brisanje zahtjeva</Button>
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                disableEscapeKeyDown
                disableEnforceFocus
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    <Box sx={{ my: 3, mx: 2 }}>

                        <Grid container alignItems="center">
                        <Grid item xs>
                            <Typography gutterBottom variant="h4" component="div">
                                {props.zahtjev + ' ' + props.rank}
                            </Typography>
                        </Grid>
                        </Grid>
                        <Typography gutterBottom variant="h6" component="div">
                                {'Ime prezime | 24.4.2022. | 09:00am'}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                                {'Opis problema:'}
                        </Typography>

                        <Typography color="text.secondary" variant="body2" style={{marginBottom: '20px'}}>
                        Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
                        just down the hall.
                        </Typography>

                        <Typography gutterBottom variant="h5" component="div">
                        <Box sx={{ minWidth: 120 }}>
                            
                            <FormControl fullWidth style={{marginBottom: '20px'}}>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                Uposlenik
                                </InputLabel>
                                <NativeSelect           
                                    value={age}
                                    label="Uposlenik"
                                    onChange={handleChange}>
                                {kategorije.map((kategorija, index) => {
                                    return <option value={10}>{kategorija + ' ' + index}</option>
                                })}
                                </NativeSelect>
                            </FormControl>

                            <FormControl fullWidth style={{marginBottom: '20px'}}>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                Kategorija
                                </InputLabel>
                                <NativeSelect>
                                {kategorije.map((kategorija, index) => {
                                    return <option value={10}>{kategorija + ' ' + index}</option>
                                })}
                                </NativeSelect>
                            </FormControl>

                            <FormControl fullWidth style={{marginBottom: '20px'}}>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                Status
                                </InputLabel>
                                <NativeSelect>
                                {status.map((status, index) => {
                                    return <option value={10}>{status + ' ' + index}</option>
                                })}
                                </NativeSelect>
                            </FormControl>

                            <FormControl fullWidth style={{marginBottom: '20px'}}>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                Rješenja
                                </InputLabel>
                                <NativeSelect>
                                {rjesenja.map((rjesenje, index) => {
                                    return <option>{rjesenje + ' ' + index}</option>
                                })}
                                </NativeSelect>
                            </FormControl>

                            </Box>
                        </Typography>
                        
                    </Box>
                    </Typography>

                    <Box style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button variant="contained" style={{backgroundColor:"green", display: 'flex', justifyContent: 'center', margin: '10px'}}>
                        Snimi promjene
                    </Button>
                    <Button onClick={handleClose} variant="contained" style={{backgroundColor:"red", display: 'flex', justifyContent: 'center', margin: '10px'}}>
                        Odustani
                    </Button>
                    </Box>

                </Box>

            </Modal>
        </div>
      </Box>
    </Box>
    <Divider/>
  </>
};

export default Zahtjev;