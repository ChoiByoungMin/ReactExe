import {createSlice} from '@reduxjs/toolkit';

const strSlice = createSlice({
    name:'strSlice',
    initialState:{value:''},
    reducers:{
        append:(state, action) => {
            state.value = state.value + action.ch;
        }
    }
});

export default strSlice;