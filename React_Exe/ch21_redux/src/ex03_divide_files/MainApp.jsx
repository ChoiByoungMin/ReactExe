import { useState } from 'react';
import './style.css';
import Left1 from './Left1';
import Right1 from './Right1';

function MainApp(){
    const [number, setNumber] = useState(1);
    return (
        <div id='container'>
            <h1>Root : {number}</h1>
            <div id='grid'>
                <Left1 number={number} />
                <Right1 onIncrease={() => setNumber(number + 1)} />
            </div>
        </div>
    )
}

export default MainApp;