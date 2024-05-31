import {createSlice} from '@reduxjs/toolkit';

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

export default counterSlice;