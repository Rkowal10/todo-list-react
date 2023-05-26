import styled from "styled-components";

export const Forms = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;

    @media (max-width: 767px) {
            grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #bdbcbc;

    &:hover {
        border: 1px solid black;
    }
`;

export const Button = styled.button`
    color: white;
    background-color: hsl(180, 100%, 25%);
    padding: 10px;
    border: none;
    cursor: pointer;
    transition: 1s;

    &:hover {
        background-color: hsl(180, 100%, 35%);
        transform: scale(1.15);
    }
`;