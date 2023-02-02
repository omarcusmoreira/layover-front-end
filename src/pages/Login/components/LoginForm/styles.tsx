import { Button } from "@mui/material";
import styled from "styled-components";


export const StyledButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  fontSize: "25px",
  textTransform: "capitalize",
  padding: "0 32px",
  borderRadius: "19px",
  backgroundColor: theme.darkBlue,
  height: "38px",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
}));

export const LoginContainer = styled.div`
  display: flex;
  flex: 0 1 428px;
  flex-direction: columns;
`;
export const FormContainer = styled.form`
  display: flex;
  flex: 0 1 428px;
  flex-direction: column;
`;
export const InputFields = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  width: 100%;

  label {
    font-weight: 300;
    font-size: 32px;
    line-height: 38px;
    color: #021442;
  }

  input {
    max-width: 288px;
    width: 288px;
    height: 38px;
    padding: 16px 16px;
    border: none;
    background: rgba(103, 112, 141, 0.1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
  }

  input:focus {
    background: white;
    border: 1px solid grey;
  }
`;

export const HelpLink = styled.a`
  display: block;
  width: 100%;
  margin-top: 20px;
  text-align: right;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
  text-decoration-line: underline;
  color: #021442;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
`;

export const SocialIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  margin-right: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  svg {
    color: #fff;
  }
`;

export const Register = styled.a`
  display: block;
  width: 100%;
  margin-top: 52px;
  text-align: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-decoration-line: underline;
  color: #e30b22;
  text-transform: uppercase;
`;

export const ModalPasswordContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  max-width: 589px;
  max-height: 314px;

  margin: auto;
  padding: 32px 27px 22px 27px;

  background: #ffffff;
  box-shadow: 1px 3px 8px 2px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
`;

export const InputFieldsModal = styled.input`
  width: 100%;
  padding: 16px 20px;
  border: none;
  background: rgba(103, 112, 141, 0.1);
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;

  input:focus {
    background: white;
    border: 1px solid grey;
  }
`;

export const FooterModal = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
