// import { createStore } from "redux";
import { legacy_createStore as createStore} from 'redux'
import {Provider, useDispatch, useSelector} from 'react-redux';

function reducer(state, action){    // 이벤트 처리 후 store 저장변수에 갱신
    if(action.type === 'up')
        return {...state, value:state.value + action.step};
    return state;

}

const initialState = {value : 0};   // 초기값/어떤 변수를 store에 저장할 것인가
const store = createStore(reducer, initialState);   // 공유 저장소

function Counter(){
    const dispatch = useDispatch();  // reudx store에 저장된 reducer에 이벤트 전달

    // reudx store에 저장된 객체의 value필드 값을 가져온다.
    const count = useSelector(state=>state.value);
    return (
        <div>
            <button onClick={()=>{
                dispatch({type:'up', step:2});  // reducer의 action에 객체전달
            }}>+</button> {count}
        </div>
    )
}

function MainApp(){
    return(
        <Provider store={store}>
            <div>
                <Counter/>
            </div>
        </Provider>
    )
}

export default MainApp;