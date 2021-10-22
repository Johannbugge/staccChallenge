import s from './dashboard.module.css';

function Dashboard() {
    return (
        <div className={s.moduleControl}>
            <h3>Dashboard</h3>
            <div className={s.moduleFormatting}>
                <div className={s.moduleVerify}>
                    <h4 className={s.moduleName}>Verifiseringer</h4>
                </div>
                <div className={s.modulePreviouslyVerified}>
                    <h4 className={s.moduleName}>Godkjente verifiseringer</h4>
                </div>
                <div className={s.applicantTrend}>
                    <h4 className={s.moduleName}>Søknads trend</h4>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
