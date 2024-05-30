import { useState } from 'react';
import './style.css';

function MainApp(){
    const [number, setNumber] = useState(1);
    return (
        <div id='container'>
            <h1>Root : {number}</h1>
            <div id='grid'>
                <Left1 number={number} />
                <Right1 onIncrease={() => setNumber(number + 1)} />
            </div>
        </div>
    )
}

function Left1(props){
    const {number} = props;
    return (
        <div>
            <h1>Left1 : {number}</h1>
            <Left2 number={number}/>
        </div>
    )
}
function Left2(props){
    const {number} = props;
    return (
        <div>
            <h1>Left2 : {number}</h1>
            <Left3 number={number}/>
        </div>
    )
}
function Left3(props){
    const {number} = props;
    return (
        <div>
            <h1>Left3 : {number}</h1>
        </div>
    )
}

function Right1(props){
    const {onIncrease} = props;
    return (
        <div>
            <h1>Right1</h1>
            <Right2 onIncrease= {onIncrease} />
        </div>
    )
}
function Right2(props){
    const {onIncrease} = props;
    return (
        <div>
            <h1>Right2</h1>
            <Right3  onIncrease= {onIncrease} />
        </div>
    )
}
function Right3(props){
    const {onIncrease} = props;
    return (
        <div>
            <h1>Right3 </h1>
            <input type='button' value='+' onClick={()=>onIncrease()} />
        </div>
    )
}

export default MainApp;