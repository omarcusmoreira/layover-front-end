import styled from "styled-components";

export const MyLayoversPage = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    margin-top:9rem;
`

export const MyLayoversPageContentBackGround = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    margin-top:6rem;
    background-color: #4c5879;
    padding:0 1rem;
`

export const MyLayoversPageContent = styled.div`
    max-width:75rem;
    width:100%;
    align-self: center;
w`

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
    grid-template-columns: repeat(auto-fill, minmax(268px, 1fr));
    grid-column-gap:2rem;
    grid-row-gap:2rem;
    margin-top:4rem;
    margin-bottom:3rem;
`

export const ActionsButtonsWrap = styled.div`
    display:flex;
    max-width:75rem;
    width:100%;
    align-self: center;
    justify-content: space-between;
    padding: 2rem 2rem;
`