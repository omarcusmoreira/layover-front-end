import styled from "styled-components";

export const StatusContainer = styled.div` 
    display:flex;
    flex-direction: column;
    padding: 5rem 0 7rem;
`
export const ReplyWrap = styled.div` 
    display: grid;
    grid-gap: 64px 64px;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    margin-top: 110px;

`
export const CellInfo = styled.div` 
    grid-row-start: 1;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 2;

    display:flex;
    justify-content: center; 
    align-items: center;
    backGround-color: #67708D;
    text-align: center;
    height: 660px;
`

export const FlightStatusDelay = styled.div` 
    display: flex;
    flex-direction: column;
    width:460px;
    gap: 24px;
`

export const FlightStatusCanceled = styled.div` 
    display: flex;
    flex-direction: column;
    width:460px;
    gap: 24px;
        border-top: 5px solid rgba(0, 0, 0, 0.15);
`




