import s from './fillerInfo.module.css';

function FillerInfo() {
    return (
        <div className={s.formatter}>
            <div className={s.infobars}>
                <h5>Godkjente søknader</h5>
                <div className={s.granted}></div>
                <h3>75%</h3>
            </div>
            <div className={s.infobars}>
                <h5>Avslåtte søknader</h5>
                <div className={s.denied}></div>
                <h3>25%</h3>
            </div>
        </div>
    );
}

export default FillerInfo;
