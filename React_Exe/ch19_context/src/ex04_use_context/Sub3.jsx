import { useContext } from "react";
import { themeContext1 } from "./themeContext";

function Sub3(){
    const theme1 = useContext(themeContext1);
    return (
        <div style={theme1}>
            <h1>Sub3</h1>
        </div>
    )
}

export default Sub3;