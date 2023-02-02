import React, { useState } from "react";
import { Facebook, Google, LinkedIn } from "@mui/icons-material";
import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../../services/firebase";
import {
  FormContainer,
  LoginContainer,
  InputFields,
  HelpLink,
  Footer,
  Register,
  SocialIcon,
  ModalPasswordContainer,
  InputFieldsModal,
  FooterModal,
  StyledButton,
} from "./styles";
import { Link } from "react-router-dom";

interface LoginFormProps {
  handleClose: () => void;
  handleOpen: () => void;
  open: boolean;
  userType: string;
}

export function LoginForm({
  handleClose,
  handleOpen,
  open,
  userType,
}: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);

  function handleChangeEmailInput(event: React.FormEvent<HTMLInputElement>) {
    setEmail(event.currentTarget.value);
  }

  function handleChangePasswordInput(event: React.FormEvent<HTMLInputElement>) {
    setPassword(event.currentTarget.value);
  }

  function handleSignIn(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  const url: any = {
    user: "/register/user",
    company: "/register/hotel",
  };
  const userTypeString: any = {
    user: "Usuário",
    company: "Empresa",
  };

  return (
    <LoginContainer>
      <FormContainer action="">
        <Typography
          variant="h2"
          width="100%"
          textAlign="center"
          fontSize="52px"
          fontWeight="700"
          color="#021442"
          marginBottom="50px"
        >
          Sou {userTypeString[userType]}
        </Typography>
        <InputFields>
          <label>Login</label>
          <input
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={handleChangeEmailInput}
          />
        </InputFields>
        <InputFields>
          <label>Senha</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChangePasswordInput}
          />
        </InputFields>
        <div>
          <HelpLink className="ForgetPassword" onClick={handleOpen}>
            Esqueci minha senha
          </HelpLink>
          <Modal open={open} onClose={handleClose}>
            <Box>
              <ModalPasswordContainer>
                <Typography
                  variant="h2"
                  width="100%"
                  textAlign="center"
                  fontSize="40px"
                  fontWeight="700"
                  color="#021442"
                  marginBottom="22px"
                >
                  Esqueci a minha senha
                </Typography>

                <form action="">
                  <InputFieldsModal
                    type="email"
                    placeholder="Insira seu e-mail"
                  />
                </form>

                <FooterModal>
                  <Button
                    onClick={handleClose}
                    sx={{
                      color: "#021442",
                      fontSize: "19px",
                      fontWeight: "300",
                      textTransform: "uppercase",
                    }}
                  >
                    Voltar
                  </Button>
                  <StyledButton variant="contained">Aplicar</StyledButton>
                </FooterModal>
              </ModalPasswordContainer>
            </Box>
          </Modal>
        </div>
        <Footer>
          <div>
            <SocialIcon>
              <Facebook />
            </SocialIcon>
            <SocialIcon>
              <Google />
            </SocialIcon>
            <SocialIcon>
              <LinkedIn />
            </SocialIcon>
          </div>
          <StyledButton onClick={handleSignIn} variant="contained">
            entrar
          </StyledButton>
        </Footer>
        <Register href={url[userType]}>Cadastre-se</Register>
      </FormContainer>
    </LoginContainer>
  );
}
