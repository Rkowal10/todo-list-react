import styled from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    flex-wrap: wrap; 

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
            flex-direction: column;
            justify-content: center;
    }
`;

export const Button = styled.button`
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
        cursor: default;
    }
`;