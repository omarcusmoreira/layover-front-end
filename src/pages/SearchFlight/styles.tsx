import styled from "styled-components";

export const FlightStatusWrap = styled.div`
    display:flex;
`

export const FlightStatusMenu = styled.div`
    flex: 0 0 18rem;
    background-color:#ddd;
    padding: 4rem 0;
    align-items: start;
    padding-right: 1rem;

    div{
        width:100% !important;
        display:flex;
        gap:.5rem;
        button{
            padding-right: 1rem;
            align-items: self-end;
        }
    }
`

export const FlightStatusTab = styled.div`
    flex 1;
    padding:3rem;
    background: #eee;

`
