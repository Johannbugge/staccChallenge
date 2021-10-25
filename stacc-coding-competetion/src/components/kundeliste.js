import React from 'react';
import s from './kundeliste.module.css';
import Kunde from './kunde';
import { useState } from 'react';

function KundeListe(props) {
    function removeKunde(navn) {
        let removedIdx = -1;
        let temp = props.Kunder.filter((kunde, index) => {
            if (kunde !== navn) {
                return true;
            } else {
                removedIdx = index;
                return false;
            }
        });
        props.setKunder(temp);
        let tempId = props.kid.filter((kid, index) => {
            return index !== removedIdx;
        });
        props.setKundeId(tempId);
        console.log(props.Kunder);
        console.log(props.kid);
    }

    function getStatus() {
        return 'Waiting approval';
    }

    return (
        <div className={s.formatting}>
            {props.Kunder.map((navn, index) => {
                if (index > 3) {
                    return null;
                }
                return (
                    <Kunde
                        removeKunde={removeKunde}
                        loadModal={props.loadModal}
                        kundeNavn={navn}
                        status={getStatus()}
                        id={props.kid[index]}
                        key={index}
                    ></Kunde>
                );
            })}
        </div>
    );
}

export default KundeListe;
