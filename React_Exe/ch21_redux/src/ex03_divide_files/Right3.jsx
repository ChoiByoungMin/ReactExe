
function Right3(props){
    const {onIncrease} = props;
    return (
        <div>
            <h1>Right3 </h1>
            <input type='button' value='+' onClick={()=>onIncrease()} />
        </div>
    )
}
export default Right3;