import React from 'react';

const FormaPrijava = (props) => {
    return(
        <div className="elementi">
            <input className="input" type="text" placeholder="Korisničko ime" value={props.uname} ></input>
            <input className="input" type="password" placeholder="Šifra" value={props.sifra} ></input>
            <button className="zaboravljena-sifra" >Zaboravili ste lozinku?</button>
        </div>
    );
}

export default FormaPrijava;