import { legacy_createStore as createStore} from 'redux'
import {Provider, useDispatch, useSelector} from 'react-redux';
import {createSlice, configureStore} from '@reduxjs/toolkit';

// store내에 작은 store를 slice라 한다.
const counterSlice = createSlice({
                                name:'counterSlice',
                                initialState:{value:0, mValue:0},
                                reducers:{
                                    up:(state, action) => {
                                        state.value = state.value + action.step;
                                    },
                                    down:(state, action) => {
                                        state.mValue = state.mValue - action.step;
                                    }
                                }
                            });

const strSlice = createSlice({
                                name:'strSlice',
                                initialState:{value:''},
                                reducers:{
                                    append:(state, action) => {
                                        state.value = state.value + action.ch;
                                    }
                                }
                            });

// 큰 저장소인 store내에 작은 저장소인 slice를 포함
const store = configureStore({
    reducer:{
        counter:counterSlice.reducer,
        append:strSlice.reducer
    }
});

function Counter(){
    const dispatch = useDispatch();     
    const count = useSelector(state=>state.counter.value);
    const mCount = useSelector(state=>state.counter.mValue);
    const str = useSelector(state=>state.append.value);

    return (
        <div>
            <button onClick={()=>{
                dispatch({type:'counterSlice/up', step:2});
            }}>+</button> {count}
            <br/>
            <button onClick={()=>{
                dispatch({type:'counterSlice/down', step:2});
            }}>-</button> {mCount}
            <br/>
            <button onClick={()=>{
                dispatch({type:'strSlice/append', ch:'0'});
            }}>append</button> {str}
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