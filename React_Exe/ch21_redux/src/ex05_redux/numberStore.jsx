
import {createStore} from 'redux';

function reducer(currentState, action){
    if(currentState === undefined)
        return { number : 1};

    const newState = {...currentState};
    return newState;
}

const numberStore = createStore(reducer);

export default numberStore;