import styled from "styled-components";

const Wrapper = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: ${props => props.column ? "column" : "row"};
    flex-wrap: wrap;
    align-items: ${(props) => {
        if(props.baseline)
            return "baseline";
        else if(props.stretch)
            return "stretch";
        else
            return "flex-start";
    }};
    justify-content: flex-start;
    background-color: lightgray;
`;

export default Wrapper;