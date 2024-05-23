import styled from "styled-components";

const PrimaryButton = styled.button`
    margin: 10px;
    color: ${props => props.primary ? 'white' : 'black'};
    background-color: ${props => props.primary ? 'black' : 'white'};
`;

export default PrimaryButton;