import './App.css';
import Dashboard from './components/dashboard';
import Navbar from './components/navbar';
import Welcome from './components/welcome';
import { useEffect, useState } from 'react';

function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    function Load() {
        useEffect(() => {
            fetch('placeholder')
                .then((res) => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true);
                        setItems(result);
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                );
        }, []);
    }
    return (
        <div className='App'>
            <Navbar></Navbar>
        </div>
    );
}

export default App;
