import Dialog from "./Dialog";

// Dialog를 가져다가 title과 message속성을 특별하게 정의해주다.
// 즉, '구체화했다', 이것을 Specialization이라고 부른다.

export default function WelcomeDialog(props){
    return (
        <Dialog
            title="어서 오세요"
            message="우리 사이트에 방문하신 것을 환영합니다."
        />
    )
}