import styled from "styled-components";

export default styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color.silver};

    &:hover {
        border: 1px solid ${({ theme }) => theme.color.black};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        max-width: 90%; 
    }
`;