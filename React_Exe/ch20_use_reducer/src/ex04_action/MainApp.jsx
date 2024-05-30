
import React, {useState} from 'react';
import { useReducer } from 'react';

function MainApp(){
    const countReducer = (oldCount, action) => {
        if(action.type === 'UP')
            return oldCount + action.number;
        else if(action.type === 'DOWN')
            return oldCount - action.number;
        else if(action.type === 'RESET')
            return 0;
    }
    const [count, countDispatch] = useReducer(countReducer, 0);
    const down = () => countDispatch({type:'DOWN', number: number});
    const reset = () => countDispatch({type:'RESET', number: number});
    const up = () => countDispatch({type:'UP', number: number});

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