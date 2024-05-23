import styled from "styled-components";
import Wrapper from "./Wrapper";
import Block from "./Block";


const Blocks = (props) => {
    // console.log(`Blocks = ${props}`);
    return (
        // 부모 전달해준 props를 그대로 자식 컴포넌트에 전달하기
        <Wrapper {...props} >
            {props.blockItems.map((blockItem) => {
                return (
                    <Block padding={blockItem.padding}
                            backgroundImage={blockItem.backgroundImage}
                    >
                        {blockItem.label}
                    </Block>
                );
            })}
        </Wrapper>
    )
}

export default Blocks;

