import React from 'react';
import s from './kundeliste.module.css';
import Kunde from './kunde';
import { useState } from 'react';

const kundeNames = [
    'Knut Arild Hareide',
    'Jørgen Nilsen',
    'Joseph Biden',
    'Johann Bugge',
    'Neu Kun-Deh',
];

const kundeId = [
    'evpo-ff10bc5a-4aad-4895-b886-fb88e598ed57',
    'NK-2Mgn5wh5qDh2YhDsdFvDjH-1109',
    'evpo-64239edf-8e06-4d2d-acc0-33d96bc79774',
    'NK-23wLbkLretoJxTci3VMZwEtfW',
    'NK-2Mgn5wh5qDh2YhDsdFvDjH',
];

function KundeListe(props) {
    const [kunder, setKunder] = useState(kundeNames);
    let currentIndex = 0;

    function removeKunde(navn) {
        let temp = kunder.filter((kunde) => {
            return kunde !== navn;
        });
        setKunder(temp);
    }

    function verify() {
        if (
            KundeListe.name === kunder[currentIndex] &&
            KundeListe.Id === kundeId[currentIndex]
        ) {
            console.log('Prompting manual verification...');
        } else {
            console.log('Customer is NOT a politically exposed person');
        }
    }

    function getStatus() {
        return 'Waiting approval';
    }

    return (
        <div className={s.formatting}>
            {kunder.map((navn, index) => {
                if (index > 3) {
                    return null;
                }
                return (
                    <Kunde
                        removeKunde={removeKunde}
                        loadModal={props.loadModal}
                        kundeNavn={navn}
                        status={getStatus()}
                        id={kundeId[index]}
                        key={index}
                    ></Kunde>
                );
            })}
        </div>
    );
}

export default KundeListe;
