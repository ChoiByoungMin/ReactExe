import styled from "styled-components";
import Wrapper from "./Wrapper";
import Block from "./Block";

const blockItems = [
    {
        label: '1',
        padding: '1rem',
        backgroundColor: 'red'
    },
    {
        label: '2',
        padding: '2rem',
        backgroundColor: 'green'
    },    
    {
        label: '3',
        padding: '3rem',
        backgroundColor: 'blue'
    },
];

const Blocks = (props) => {
    return (
        <Wrapper {...props} >
            {blockItems.map((blockItem) => {
                return (
                    <Block padding={blockItem.padding}
                            backgroundColor={blockItem.backgroundColor}
                    >
                        {blockItem.label}
                    </Block>
                );
            })}
        </Wrapper>
    )
}

export default Blocks;

