import { NavLink } from "react-router-dom/cjs/react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};

    &:hover {
        color: ${({ theme }) => theme.color.bondiBlue};
        border-bottom: 1px solid;
    }

    &.active {
        font-weight: 700;
    }
`;

export const List = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style-type: none;
    background-color: ${({ theme }) => theme.color.teal};
    margin: 0px;
    margin-bottom: 10px;
    padding: 0;
    

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        flex-direction: column;
    }
`;

export const Item = styled.li`
    margin: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        margin: 10px;
    }
`;