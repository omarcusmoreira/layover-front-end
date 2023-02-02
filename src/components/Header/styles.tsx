import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    padding: 0 2.5rem;
    background-color: ${ props => props.theme.white};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    `
export const SearchContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: start;
    gap: 0.5rem;
    color: ${ props => props.theme.darkBlue};
    > svg{
        font-size: 30px;
    }
    color: ${ props => props.theme.inputField};
    margin-top:-1rem;
`

export const stylesInput = {
    padding: 0,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '1rem',
    lineHeight: '1rem',
    color: '#5B5959',
  };


export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 0.5rem;
    color: ${ props => props.theme.darkBlue};
`