import s from './navbar.module.css';
import profile from '../assets/PlaceholderProfile.png';
import logout from '../assets/logout.png';
import Welcome from './welcome';
import Dashboard from './dashboard';
import { useState } from 'react';

function Navbar(props) {
    const [display, setDisplay] = useState(false);
    const show = () => setDisplay(true);
    const hide = () => setDisplay(false);
    return (
        <div>
            <nav className={s.navbar}>
                <h2 className={s.logo}>
                    KYC<a className={s.logoTwo}>.</a>
                </h2>
                <div className={s.profile}>
                    <img className={s.profilePic} src={profile} alt=''></img>
                    <h4>Johann Bugge</h4>
                    <h5 style={{ color: 'rgba(255,255,255,0.6)' }}>
                        Saksbehandler
                    </h5>
                </div>
                <div className={s.navigate}>
                    <h6 className={s.title}>Main</h6>
                    <h4 onClick={hide}>Hjem</h4>
                    <h4
                        onClick={show}
                        className={`${s.verify} ${
                            props.Kunder.length > 0 ? s.noti : null
                        }`}
                    >
                        Verifiser
                    </h4>
                    <h4>Innboks</h4>
                </div>
                <div className={s.navigate}>
                    <h6 className={s.title}>Other</h6>
                    <h4>Kalender</h4>
                    <h4>Informasjon</h4>
                    <h4>Hjelp</h4>
                    <img className={s.logout} alt='Logout' src={logout}></img>
                </div>
            </nav>
            {display ? null : <Welcome />}
            {display ? (
                <Dashboard
                    setKundeId={props.setKundeId}
                    kid={props.kid}
                    setKunder={props.setKunder}
                    Kunder={props.Kunder}
                />
            ) : null}
        </div>
    );
}

export default Navbar;
