import s from './dashboard.module.css';
import graph from '../assets/Graph.png';
import KundeListe from './kundeliste';
import FillerInfo from './fillerInfo';
import Verifiser from './verifiser';
import ApplicantTrend from './applicanttrend';
import { useState } from 'react';

function Dashboard(props) {
    const [modal, setModal] = useState(null);

    return (
        <div className={s.moduleControl}>
            {modal}
            <h3>Dashboard</h3>
            <div className={s.moduleFormatting}>
                <div className={s.moduleVerify}>
                    <h4 className={s.moduleName}>Verifiseringer</h4>
                    <KundeListe
                        kid={props.kid}
                        setKundeId={props.setKundeId}
                        setKunder={props.setKunder}
                        Kunder={props.Kunder}
                        loadModal={setModal}
                    ></KundeListe>
                </div>
                <div className={s.modulePreviouslyVerified}>
                    <h4 className={s.moduleName}>Informasjon</h4>
                    <FillerInfo></FillerInfo>
                </div>
                <div className={s.applicantTrend}>
                    <h4 className={s.moduleName}>Søknadstrend</h4>
                    <ApplicantTrend></ApplicantTrend>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
