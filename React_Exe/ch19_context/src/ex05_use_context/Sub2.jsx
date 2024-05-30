import { useContext } from "react";
import Sub3 from "./Sub3";
import { themeContext1 } from "./themeContext";

function Sub2(){
    const theme1 = useContext(themeContext1);
    return (
        <div style={theme1}>
            <h1>Sub2</h1>
            <Sub3/>
        </div>
    )
}

export default Sub2;