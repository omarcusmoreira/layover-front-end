import styled from "styled-components";

export const MyLayoversCard = styled.div`
    display:flex;
    flex-direction: column;
    border-radius: 1.2rem;
    gap: 1rem;
    color: #021442;
    background-color: #fff;
    list-style-type: none;
    padding: 1.5rem 1.5rem 1.5rem 1.5rem;
    box-shadow: 1.00152px 3.00456px 8.01216px 2.00304px rgba(0, 0, 0, 0.5);
`

export const LayoversLabel = styled.h2`
    text-align:center;
    margin-bottom:.5rem;
    font-size: 1.5rem;
    font-weight:600;
    color:#444;
`

export const LayoversTicket = styled.h3`
    display:inline-block;
    font-size: 1.5rem;
    color:#000;
    padding-bottom: .5rem;
    margin-bottom: .5rem;
    border-bottom: 1px #aaa solid;
`

export const LayoversTicketSubitem = styled.p`
    display:inline-block;
    font-weight:600;
    color:#000;
    span{
        margin-right: .5rem;
        font-weight:400;
        color:#333;
    }
`


