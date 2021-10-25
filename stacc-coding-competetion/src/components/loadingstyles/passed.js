import s from './passed.module.css';

function Passed() {
    return (
        <div>
            <div className={s.loading}>
                <div className={s.spinner}></div>
                <p>Denne personen er politisk eksponert</p>
            </div>
        </div>
    );
}

export default Passed;
