import { useContext } from "react";
import Sub2 from "./Sub2";
import { themeContext1 } from "./themeContext";

function Sub1(){
    const theme1 = useContext(themeContext1);
    return (
        // 아래 Provider로 감싼 영역 이하에는 
        // themeContext1의 값을 아래처럼 적용한다.
        <themeContext1.Provider value={{border: '1px solid skyblue'}}>
            <div style={theme1}>
                <h1>Sub1</h1>
                <Sub2/>
            </div>
        </themeContext1.Provider>
    )
}

export default Sub1;