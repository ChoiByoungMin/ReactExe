import { useState } from 'react';
import './style.css';
import Left1 from './Left1';
import Right1 from './Right1';

function MainApp(){
    return (
        <div id='container'>
            <h1>Root</h1>
            <div id='grid'>
                <Left1 />
                <Right1 />
            </div>
        </div>
    )
}

export default MainApp;