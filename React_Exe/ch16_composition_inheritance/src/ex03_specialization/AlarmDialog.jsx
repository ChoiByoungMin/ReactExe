import Dialog from "./Dialog";

// 객체지향 언어는 상속을 이용해서 Specialization을 구현한다.
// 그러나 React는 결국 합성을 사용해서 구현한다.
// 속성의 정보를 구체적으로 부여함으로써, 컴포넌트의 기능을 특별하게 만든다.
export default function AlarmDialog(props){
    return (
        <Dialog
            title="긴급 메시지"
            message="이 사이트에 방문해서 확인이 필요합니다"
        />
    )
}