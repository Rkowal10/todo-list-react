import styled from "styled-components";

export const Unit = styled.section`
    border: 1px solid #bdbcbc;
    margin: 10px auto;
    background-color: #fff;
    max-width: 800px;
    padding: 20px;
`;

export const Header = styled.header`
    display: grid;   
    grid-template-columns: 1fr auto;
    margin: 10px auto;
    background-color: #fff;
    max-width: 800px;
    border-bottom: 2px solid #bdbcbc;
`;

export const Title = styled.h2`
    font-size: x-large;
    font-weight: 800;
    margin-top: 0;
    margin-bottom: 0;
    padding: 10px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;