import styled from "styled-components";

const PrimaryButton = styled.button`
    margin: 10px;
    color: ${(props)=>{
        if(props.primary)
            return 'white';
        else
            return 'black';
    }};
    background-color: ${(props)=>{
        if(props.primary)
            return 'black';
        else
            return 'white';
    }};
`;

export default PrimaryButton;