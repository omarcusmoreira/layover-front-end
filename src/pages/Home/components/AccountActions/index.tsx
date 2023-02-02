import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useState } from "react";
import { LocationOn } from "@mui/icons-material";
import {
  Banner,
  LocalizatorContainer,
  FormAcessAccountContainer,
  RegisterContainer,
  StyledTextField,
} from "./styles";
import BackgroundLandingPage from "../../../../assets/images/BackgroundLandingPage.svg";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { auth } from "../../../../services/firebase";

export function AccountActions() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSignIn = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  if (loading) {
    return <h1>CARREGANDO...</h1>;
  }

  return (
    <>
      <Banner style={{ backgroundImage: `url(${BackgroundLandingPage})` }}>
        <LocalizatorContainer>
          <Typography variant="h2" fontWeight="600" lineHeight="72px">
            Lorem ipsum dolor sit amet.
          </Typography>
          <Typography
            variant="h5"
            color="#fff"
            fontSize="20px"
            lineHeight="32px"
          >
            Lorem ipsum dolor sit amet. voluptatem internos ea facilis
          </Typography>
          <Button
            variant="contained"
            endIcon={<LocationOn />}
            sx={{
              color: "#fff",
              fontSize: "20px",
              textTransform: "capitalize",
              borderRadius: "21px",
              backgroundColor: "#021442",
              height: "42px",
              width: "237px",
            }}
          >
            Localizador
          </Button>
        </LocalizatorContainer>

        <FormAcessAccountContainer>
          <Typography
            variant="h3"
            fontSize="39px"
            fontWeight="600"
            lineHeight="39px"
          >
            Já possui conta?
          </Typography>
          <StyledTextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            label="Digite seu email"
            variant="filled"
            type="email"
            InputProps={{
              disableUnderline: true,
            }}
          />
          <StyledTextField
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            label="Digite a sua senha"
            variant="filled"
            InputProps={{
              disableUnderline: true,
            }}
            type="password"
          />
          <Button
            onClick={handleSignIn}
            variant="contained"
            sx={{
              alignSelf: "center",
              marginTop: "16px",
              color: "#fff",
              minWidth: "216px",
              fontSize: "20px",
              textTransform: "capitalize",
              padding: "0 52px",
              borderRadius: "21px",
              backgroundColor: "#021442",
              height: "42px",
            }}
          >
            Entrar
          </Button>
          <RegisterContainer>
            <Typography variant="h6" fontSize="20px" color="#ffF">
              Não possui conta?
            </Typography>
            <Link
              variant="h6"
              fontSize="20px"
              fontWeight="600"
              color="#ff0"
              href="/registry/user"
            >
              Cadastre-se
            </Link>
          </RegisterContainer>
        </FormAcessAccountContainer>
      </Banner>
    </>
  );
}
