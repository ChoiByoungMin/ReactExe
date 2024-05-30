
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

    return (
        <div>
            <input type='button' value='-' onClick={down} />
            <input type='button' value='0' onClick={reset} />
            <input type='button' value='+' onClick={up} />
            <span>{count}</span>
        </div>
    )
}

export default MainApp;