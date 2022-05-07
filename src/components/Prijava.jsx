
import React from "react";
import FormaPrijava from './FormaPrijava'

const Prijava = () => {
    return (
        <div className="blok">
            <div className="opis-prijava opis">
                <h4>Moj doktor</h4>
                <div className="poruka">
                    <br /><br />
                    <h2>Dobro došli!</h2>
                    <p>“Kada zdravlja nema, mudrost se ne može otkriti, umjetnost se ne može manifestirati, snaga ne može da se bori, bogatstvo postaje beskorisno i inteligencija se ne može primijeniti.” - <i>Herofil</i> </p>
                  
                </div>
            </div>
            <div className="forma">
                <h2>Prijava</h2>
                <FormaPrijava uname={"uname"} sifra={"sifra"} setUname={"setUname"} setSifra={"setSifra"} /> <br />
            </div>
        </div>
    );;
  };
  
  export default Prijava;