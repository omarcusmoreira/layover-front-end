import styled from "styled-components";

export const LayoutContainer = styled.div`
    width: 100%;
    padding: 0 0;
    margin: 0 auto;
    background-color: ${ props => props.theme.white};
    display: flex;
    flex-direction: column;
`