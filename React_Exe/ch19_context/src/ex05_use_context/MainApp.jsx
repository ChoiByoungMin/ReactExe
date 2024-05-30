import { useContext } from 'react';
import './style.css';
import Sub1 from './Sub1';
import {themeContext1} from './themeContext';

function MainApp(){
    const theme1 = useContext(themeContext1);
    return (
        <div className='root' style={theme1}>
            <h1>Hello World</h1>
            <Sub1/>
        </div>
    );
}

export default MainApp;