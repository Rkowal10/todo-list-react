import styled from "styled-components";

export const Button = styled.div`
    display: flex;
    flex-wrap: wrap; 

    @media (max-width: 767px) {
            flex-direction: column;
            justify-content: center;
    }
`;

export const FunctionButton = styled.button`
    margin-top: 0;
    padding: 10px;
    border: none;
    color: hsl(180, 100%, 25%);
    cursor: pointer;
    background-color: transparent;
    transition: 0.5s;

    &:hover {
        color: hsl(180, 100%, 35%);
    }

    &:disabled {
        color: #808080;
    }
`;