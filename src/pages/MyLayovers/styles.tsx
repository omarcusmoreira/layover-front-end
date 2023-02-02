import styled from "styled-components";

export const MyLayoversPage = styled.div`
    width:100%;
    margin-top:10rem;
`


export const MyLayoversPageContentBackGround = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    margin-top:4rem;
    background-color: #4c5879;
`

export const MyLayoversPageContent = styled.div`
    max-width:75rem;
    width:100%;
    align-self: center;
`

export const MyLayoversPageTitle = styled.h2`
    color:#021442;
    text-align:center;
    font-weight: 700;
    font-size: 46.4516px;
    line-height: 56px;
`

export const MyLayoversCards = styled.div`
    display:grid;
    width:100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap:2rem;
    grid-row-gap:2rem;
    margin-top:4rem;
    margin-bottom:3rem;
`