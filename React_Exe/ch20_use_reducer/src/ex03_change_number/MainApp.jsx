
import React, {useState} from 'react';
import { useReducer } from 'react';

function MainApp(){
    const countReducer = (oldCount, action) => {
        if(action === 'UP')
            return oldCount + 1;
        else if(action === 'DOWN')
            return oldCount - 1;
        else if(action === 'RESET')
            return 0;
    }
    const [count, countDispatch] = useReducer(countReducer, 0);
    const down = () => countDispatch('DOWN');
    const reset = () => countDispatch('RESET');
    const up = () => countDispatch('UP');

    const [number, setNumber] = useState(1);
    const changeNumber = (event) => {
        setNumber(Number(event.target.value));
    }

    return (
        <div>
            <input type='button' value='-' onClick={down} />
            <input type='button' value='0' onClick={reset} />
            <input type='button' value='+' onClick={up} />
            <input type='text' value={number} onChange={changeNumber} />
            <span>{count}</span>
        </div>
    )
}

export default MainApp;