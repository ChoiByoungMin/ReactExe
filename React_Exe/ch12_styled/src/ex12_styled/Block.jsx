import styled from "styled-components";

const Block = styled.div`
    padding: ${(props) => props.padding};
    border: 1px solid black;
    border-radius: 1rem;
    // background-color: ${(props) => props.backgroundColor};
    background-size: cover;
    background-repeat: no-repeat;
    background-image: ${(props) => {
        console.log(props);
        return props.backgroundImage;
    }};
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
`;

export default Block;