import styled from "styled-components";

export const FlightWrap = styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    width:100%;
`

export const FlightWrapTitle = styled.h2`
    font-weight: 700;
    font-size: 3rem;
    line-height: 3rem;
    color:#021442;
`

export const FlightWrapSubTitle = styled.h3`
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.5rem;
    color: #000000;
    margin-top: .5rem;
`   

export const FlightInputFieldsWrap = styled.div`
    display:flex;
    gap:1rem;
    margin-top:2rem;

    div{
        flex:1;
    }
`  
export const LayoverAlone = styled.div`
    display:flex;
    margin-top: 2.5rem;
`  
export const LayoverAloneTitle = styled.h3`
    margin-right:2rem;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2rem;
    color:#021442;
`  
export const LayoverAloneOptions = styled.div`
    label{
        margin:0 .5rem;;
        span:first-child{
            padding:0;
            svg{
                width:50px;
            }
        }

        span{
            font-weight: 800;
            font-size: 1.5rem;
        }
    }
`