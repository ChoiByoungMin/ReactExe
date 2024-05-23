
const ReactButton = (props) =>{
    const style = {
        color: 'white',
        backgroundColor: 'purple'
    }
    return <button style={style}>{props.children}</button>
}

export default ReactButton;