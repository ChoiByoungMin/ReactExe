import FancyBorder from "../ex01_containment/FancyBorder";

// 일반적인 Dialog
export default function Dialog(props){
    return(
        <FancyBorder color='blue'>
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
        </FancyBorder>
    )
}