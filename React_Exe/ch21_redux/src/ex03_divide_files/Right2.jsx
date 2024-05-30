import Right3 from "./Right3";

function Right2(props){
    const {onIncrease} = props;
    return (
        <div>
            <h1>Right2</h1>
            <Right3  onIncrease= {onIncrease} />
        </div>
    )
}
export default Right2;