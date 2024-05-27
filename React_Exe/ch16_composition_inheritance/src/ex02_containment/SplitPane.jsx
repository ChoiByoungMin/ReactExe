
// 1개의 하위 컴포넌트가 있을 때는 {props.children}을 사용하면 된다.
// 만약 여러 개의 하위 컴포넌트 그룹이 있을 때는 다수의 이름을 지정해서 나눠주면 된다.
// 아래는 {props.left}와 {props.right}로 나눈 예시이다.

export default function SplitPane(props){
    return (
        <div style={{display:"flex"}} className="SplitPane">
            <div style={{flex:1}} className="SplitPane-left">
                {props.left}
            </div>
            <div style={{flex:2}} className="SplitPane-Right">
                {props.right}
            </div>
        </div>
    )
}