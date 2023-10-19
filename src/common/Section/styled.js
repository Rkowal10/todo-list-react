import styled from "styled-components";

export const StyledSection = styled.section`
    border: 1px solid ${({ theme }) => theme.color.silver};
    margin: 10px auto;
    background-color: ${({ theme }) => theme.color.white};
    max-width: 800px;
    padding: 20px;
`;

export const Header = styled.header`
    display: grid;   
    grid-template-columns: 1fr auto;
    margin: 10px auto;
    background-color: ${({ theme }) => theme.color.white};
    max-width: 800px;
    border-bottom: 2px solid ${({ theme }) => theme.color.silver};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        display: grid;
        grid-template-columns: 1fr; 
    }
`;

export const Title = styled.h2`
    font-size: x-large;
    font-weight: 800;
    margin-top: 0;
    margin-bottom: 0;
    padding: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        grid-template-columns: 1fr;
    }
`;