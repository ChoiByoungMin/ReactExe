import { useState } from "react";

const Say = () =>{
    /* [변수명, setter함수] = useState(초기값);

        setter 함수르 통해서 변수값을 변화시켜야
        Reactdml Hook이 작동되어서
        화면에 변수가 사용된다면 변화를 감지해서  Render가 이루어진다.
    */
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('안녕하세요');
    const onClickLeave = () => setMessage('안녕히 가세요');

    return(
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1>{message}</h1>
        </div>
    )
}

export default Say;