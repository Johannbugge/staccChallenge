import react from 'react';
import { useState } from 'react';
import s from './verifiser.module.css';
import placeholderPhoto from '../assets/PlaceholderProfile.png';
import kunde from './kunde';

function Verifiser(props) {
    return (
        <div className={s.scheme}>
            <button className={s.closeButton}>X</button>
            <div className={s.schemeLayout}>
                <h3>Verifiseringsskjema</h3>
                <h4>Personopplysninger</h4>
                <img className={s.photo} src={placeholderPhoto}></img>

                <h5>Navn: </h5>
                <h5>KundeID: </h5>
                <h5>Yrke: </h5>
                <h4>Utfør politisk eksponert sjekk</h4>
                <button className={s.checkButton}>Sjekk</button>
                <h4>Tilleggsinformasjon</h4>
                <input
                    type='text'
                    className={s.inputControl}
                    value='...'
                ></input>
                <button className={s.deny}>Avslå</button>
                <button className={s.approve}>Godkjenn</button>
            </div>
        </div>
    );
}

export default Verifiser;
