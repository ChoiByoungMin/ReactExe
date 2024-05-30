
import {createStore} from 'redux';

function reducer(currentState, action){
    // useSelect로 꺼낼 때 초기값
    if(currentState === undefined)
        return { number : 1};

    const newState = {...currentState};
    if(action.type === 'PLUS'){
        newState.number++;
    }
    return newState;
}

const numberStore = createStore(reducer);

export default numberStore;