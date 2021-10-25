import react from 'react';
import { useState } from 'react';
import s from './verifiser.module.css';
import placeholderPhoto from '../assets/PlaceholderProfile.png';
import kunde from './kundeliste';
import Passed from './loadingstyles/passed';
import Failed from './loadingstyles/failed';
import Spinner from './loadingstyles/spinner';

const Verifiser = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isPep, setIsPep] = useState(null);

    function closeModal() {
        props.loadModal(null);
    }

    function checkPep() {
        setIsLoading(true);
        let url =
            'https://stacc-code-challenge-2021.azurewebsites.net/api/pep?name=' +
            props.navn;
        fetch(url)
            .then((res) => res.json())
            .then((result) => {
                setIsLoading(false);
                setIsPep(checkPepId(result.hits));
                console.log(result);
                console.log(result.numberOfHits);
            });
    }

    function checkPepId(arr) {
        console.log(arr);
        return arr.some((hit) => {
            return hit.id === props.id;
        });
    }

    function removeKunde() {
        props.removeKunde(props.navn);
        closeModal();
    }

    return (
        <div className={s.scheme}>
            <button onClick={closeModal} className={s.closeButton}>
                X
            </button>
            <div className={s.schemeLayout}>
                <h3>Verifiseringsskjema</h3>
                <h4>Personopplysninger</h4>
                <img className={s.photo} src={placeholderPhoto}></img>

                <h5>Navn: {props.navn}</h5>
                <h5>ID: {props.id}</h5>
                <h4>Utfør politisk eksponert sjekk</h4>
                <div className={s.doCheck}>
                    <button onClick={checkPep} className={s.checkButton}>
                        Sjekk
                    </button>
                    {isLoading ? <Spinner></Spinner> : null}
                </div>
                {isPep == null ? null : isPep ? (
                    <Passed></Passed>
                ) : (
                    <Failed></Failed>
                )}
                <h4>Tilleggsinformasjon</h4>
                <input type='text' className={s.inputControl} value=''></input>
                <button onClick={removeKunde} className={s.deny}>
                    Avslå
                </button>
                <button onClick={removeKunde} className={s.approve}>
                    Godkjenn
                </button>
            </div>
        </div>
    );
};

export default Verifiser;
