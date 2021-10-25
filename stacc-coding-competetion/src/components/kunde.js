import React from 'react';
import s from './kunde.module.css';

function Kunde(props) {
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
        'evpo-64239edf-8e06-4d2d-acc0-33d96bc79774	',
        'NK-23wLbkLretoJxTci3VMZwEtfW',
        'NK-2Mgn5wh5qDh2YhDsdFvDjH',
    ];

    let currentIndex = 0;

    function verify() {
        if (
            Kunde.name === kundeNames[currentIndex] &&
            Kunde.Id === kundeId[currentIndex]
        ) {
            console.log('Prompting manual verification...');
        } else {
            console.log('Customer is NOT a politically exposed person');
        }
    }

    function getStatus() {
        return 'Pending';
    }

    return (
        <div className={s.formatting}>
            <div className={s.listLine}>
                <p>{kundeNames[0]}</p>
                <p> Status: {getStatus()} </p>
                <button>Verify</button>
            </div>
            <div className={s.listLine}>
                <p>{kundeNames[1]}</p>
                <p> Status: {getStatus()} </p>
                <button>Verify</button>
            </div>
            <div className={s.listLine}>
                <p>{kundeNames[2]}</p>
                <p> Status: {getStatus()} </p>
                <button>Verify</button>
            </div>
            <div className={s.listLine}>
                <p>{kundeNames[3]}</p>
                <p> Status: {getStatus()} </p>
                <button>Verify</button>
            </div>
        </div>
    );
}

export default Kunde;
