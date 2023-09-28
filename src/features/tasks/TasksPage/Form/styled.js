import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
            grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color.silver};

    &:hover {
        border: 1px solid ${({ theme }) => theme.color.black};
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
`;