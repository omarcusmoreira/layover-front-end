import styled from "styled-components";

export const TextFieldWrap = styled.div`
  width:100%;
  position:relative;
  div{
    label{
      margin-top:-12px;
      font-size: 14px;
    }
    input{
      font-size: 16px;
    }
  }
`

export const Warning = styled.span`
  color: red;
  bottom: -18px;
  width: 100%;
  left: 0;
`