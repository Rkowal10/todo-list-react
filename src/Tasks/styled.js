import styled, { css } from "styled-components";

export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
`;

export const Item = styled.li`
    border-bottom: 1px solid ${({ theme }) => theme.color.silver};
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 10px;
    padding: 10px;
    word-break: break-all;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    cursor: pointer;
    width: 30px;
    height: 30px;
    border: none;
    padding: 0;
    transition: 1s;

    ${({ done }) => done && css`
        background-color: ${({ theme }) => theme.color.japaneseLaurel};

        &:hover {
            background-color: ${({ theme }) => theme.color.green};
        }
    `}

    ${({ remove }) => remove && css`
        background-color: ${({ theme }) => theme.color.red};

        &:hover {
            background-color: ${({ theme }) => theme.color.sunsetOrange};
        }
    `}
`;