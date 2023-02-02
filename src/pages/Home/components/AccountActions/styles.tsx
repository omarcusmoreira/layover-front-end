import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";


export const Banner = styled.div` 
    display:flex;
    max-height: 808px;
    gap: 4.5rem;
    flex-wrap: wrap;
    justify-content: space-between; 
    background-position: center;
    background-size: cover;
    padding: 16.5rem 7.5rem;
    background-repeat: no-repeat;
`

export const LocalizatorContainer = styled.div` 
    display:flex;
    flex: 0 0 26rem;
    flex-direction: column;
    gap: 16px;
`

export const FormAcessAccountContainer = styled.div` 
    display:flex;
    flex: 0 0 22.25rem;
    flex-direction: column;
    gap: 20px;
`

export const stylesInput = {
    backgroundColor: "#fff",
    border: '1px solid #DFE4F1',
    borderRadius: '5px',
    color: '#64607D',
    fontWeight: 100,
  };

export const StyledTextField = styled(TextField)(({theme}) => ({
    backgroundColor: theme.white,
    border: '1px solid #DFE4F1',
    borderRadius: '5px',
    color: '#64607D',
    fontWeight: 100,
}))

  export const RegisterContainer = styled.div` 
  text-align: center;
`

export const StyledButton = styled(Button)(({ theme }) => ({
    color: "#fff !important",
    fontSize: "25px !important",
    textTransform: "capitalize",
    padding: "0 32px  !important",
    borderRadius: "19px  !important",
    backgroundColor: `${theme.darkBlue} !important`,
    height: "38px  !important",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25) !important",
  }));