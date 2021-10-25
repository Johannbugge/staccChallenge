import './App.css';
import Navbar from './components/navbar';
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

function App(props) {
    const [kunder, setKunder] = useState(kundeNames);
    const [id, setKundeId] = useState(kundeId);
    return (
        <div className='App'>
            <Navbar
                setKunder={setKunder}
                Kunder={kunder}
                setKundeId={setKundeId}
                kid={id}
            ></Navbar>
        </div>
    );
}

export default App;
