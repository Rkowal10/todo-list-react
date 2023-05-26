import styled from "styled-components";

export const Button = styled.div`
    display: flex;
    flex-wrap: wrap; 

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
            flex-direction: column;
            justify-content: center;
    }
`;

export const FunctionButton = styled.button`
    margin-top: 0;
    padding: 10px;
    border: none;
    color: ${({ theme }) => theme.color.teal};
    cursor: pointer;
    background-color: transparent;
    transition: 0.5s;

    &:hover {
        color: ${({ theme }) => theme.color.bondiBlue};
    }

    &:disabled {
        color: ${({ theme }) => theme.color.gray};
    }
`;