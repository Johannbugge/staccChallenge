import react from 'react';
import s from './welcome.module.css';

function Welcome(props) {
    return (
        <div className={s.welcome}>
            <h1>Velkommen til</h1>
            <h1 className={s.logo}>
                KYC<a className={s.logoTwo}>.</a>
            </h1>
            <h3>
                Det ser ut som du har en kunde som må verifiseres. Du kan enkelt
                verifisere en kunde ved å trykke på "Verifiser"-knappen i
                navigasjonsbaren til venstre.
            </h3>
            <h3>
                Om det behøvs verifisering av en kunde vil du observere et rødt
                icon ved "Verifiser"-knappen.
            </h3>
        </div>
    );
}

export default Welcome;
