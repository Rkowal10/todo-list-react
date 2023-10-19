import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
            grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    color: white;
    background-color: ${({ theme }) => theme.color.teal};
    padding: 10px;
    border: none;
    cursor: pointer;
    transition: 1s;

    &:hover {
        background-color: ${({ theme }) => theme.color.bondiBlue};
        transform: scale(1.15);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        max-width: 90%;
    }
`;