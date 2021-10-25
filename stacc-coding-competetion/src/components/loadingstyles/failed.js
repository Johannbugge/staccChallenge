import s from './failed.module.css';

function Failed() {
    return (
        <div>
            <div className={s.loading}>
                <p>Denne personen er ikke politisk eksponert</p>
            </div>
        </div>
    );
}

export default Failed;
