import Right2 from "./Right2";

function Right1(props){
    const {onIncrease} = props;
    return (
        <div>
            <h1>Right1</h1>
            <Right2 onIncrease= {onIncrease} />
        </div>
    )
}
export default Right1;