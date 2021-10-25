import s from './dashboard.module.css';
import graph from '../assets/Graph.png';
import Kunde from './kunde';
import FillerInfo from './fillerInfo';
import Verifiser from './verifiser';

function Dashboard() {
    return (
        <div className={s.moduleControl}>
            <h3>Dashboard</h3>
            <Verifiser></Verifiser>
            <div className={s.moduleFormatting}>
                <div className={s.moduleVerify}>
                    <h4 className={s.moduleName}>Verifiseringer</h4>
                    <Kunde></Kunde>
                </div>
                <div className={s.modulePreviouslyVerified}>
                    <h4 className={s.moduleName}>Informasjon</h4>
                    <FillerInfo></FillerInfo>
                </div>
                <div className={s.applicantTrend}>
                    <h4 className={s.moduleName}>Søknadstrend</h4>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
