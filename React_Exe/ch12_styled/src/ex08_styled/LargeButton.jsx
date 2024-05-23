import SimpleButton from "./SimpleButton";
import styled from "styled-components";

// 이미 만들어진 styled-component인 SimpleButton을
// 기반으로 해서 추가 디자인
const LargeButton = styled(SimpleButton)`
    font-size: 50px;
    margin: 10px;
`;

export default LargeButton;