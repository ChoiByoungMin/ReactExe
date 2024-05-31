import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './slice/counterSlice';
import strSlice from './slice/strSlice';

// 큰 저장소인 store내에 작은 저장소인 slice를 포함
const store = configureStore({
    reducer:{
        counter:counterSlice.reducer,
        append:strSlice.reducer
    }
});

export default store;