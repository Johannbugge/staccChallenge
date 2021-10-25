import s from './kunde.module.css';
import Verifiser from './verifiser';

function Kunde(props) {
    function lagModal() {
        props.loadModal(
            <Verifiser
                removeKunde={props.removeKunde}
                navn={props.kundeNavn}
                id={props.id}
                loadModal={props.loadModal}
            ></Verifiser>
        );
    }
    return (
        <div className={s.listLine}>
            <p>{props.kundeNavn}</p>
            <p> Status: {props.status} </p>
            <button onClick={lagModal}>Verify</button>
        </div>
    );
}

export default Kunde;
