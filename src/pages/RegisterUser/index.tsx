import { Button, Checkbox, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import RegisterUserImg from "../../assets/images/registerUser.svg";
import { InputText } from "../../components/common/inputText";
import { InputSelect } from "../../components/common/inputSelect";
import { InputDate } from "../../components/common/inputDate";

import {
  RegisterPage,
  RegisterContent,
  RegisterInputsFieldsBox,
  RegisterInputsFieldsBoxRow,
  RegisterInputsFieldsBoxImage,
  RegisterTitle,
  SendAccept,
} from "./styles";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";

export function RegisterUser() {
  const [name, setName] = useState("");
  const [born, setBorn] = useState("");
  const [genre, setGenre] = useState(" ");
  const [nacionaly, setNacionaly] = useState(" ");
  const [cpf, setCpf] = useState("");
  const [passport, setPassport] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatEmail, setRepeatEmail] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [agreeAll, setAgreeAll] = useState(false);

  const [messageErrorEmail, setMessageErrorEmail] = useState("");
  const [messageErrorPassword, setMessageErrorPassword] = useState("");

  const [userData, setUserData] = useState({
    name,
    born,
    genre,
    cpf,
    passport,
    email,
    password,
    agreeAll,
  });

  const [createUserWithEmailAndPassword, error, loading] =
    useCreateUserWithEmailAndPassword(auth);

  const styleError = {
    border: "1px solid #E30B22",
    borderRadius: ".4rem",
    fontSize: "1rem",
    backgroundColor: "#fff",
    paddingInline: ".5rem",
  };

  const cpfMask = (value: any) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  function handleValidateEmail() {
    if (!repeatEmail.includes("@") || !email.includes("@")) {
      setMessageErrorEmail("* Por favor coloque um email válido");
    } else if (repeatEmail !== email) {
      setMessageErrorEmail("* Emails não coincidem");
      return false;
    } else {
      setMessageErrorEmail("");
      return true;
    }
  }

  function handleValidatePassword() {
    if (repeatPassword !== password) {
      setMessageErrorPassword("* Senhas não coincidem");
      return false;
    } else {
      setMessageErrorPassword("");
      return true;
    }
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    if (!handleValidateEmail() || !handleValidatePassword()) return false;
    setUserData({
      name,
      born,
      genre,
      cpf,
      passport,
      email,
      password,
      agreeAll,
    });
    createUserWithEmailAndPassword(email, password);
  }

  return (
    <RegisterPage>
      <RegisterContent>
        <RegisterInputsFieldsBox>
          <RegisterTitle>Cadastro</RegisterTitle>

          <RegisterInputsFieldsBoxRow>
            <InputText
              callBacks={(e) => setName(e.target.value)}
              value={name}
              label="Nome Completo"
              placeholder="(Conforme o documento)"
            />
          </RegisterInputsFieldsBoxRow>

          <RegisterInputsFieldsBoxRow>
            <InputDate
              callBacks={(e) => setBorn(e.target.value)}
              value={born}
              label="Data de Nascimento"
              placeholder="(DD/MM/AAAA)"
            />
            <InputSelect callBacks={(e) => setGenre(e)} value={genre}>
              <MenuItem value={" "}>Gênero</MenuItem>
              <MenuItem value={"Masc"}>Masculino</MenuItem>
              <MenuItem value={"Fem"}>Feminino</MenuItem>
              <MenuItem value={"Others"}>Outros</MenuItem>
              <MenuItem value={"Not-prefer"}>Prefiro não especificar</MenuItem>
            </InputSelect>
          </RegisterInputsFieldsBoxRow>

          <RegisterInputsFieldsBoxRow>
            {nacionaly == "EXT" ? (
              <InputText
                callBacks={(e) => setPassport(e.target.value)}
                value={passport}
                label="Passaporte"
                placeholder="Digite número do passaporte"
              />
            ) : (
              <InputText
                callBacks={(e) => setCpf(e.target.value)}
                value={cpfMask(cpf)}
                label="CPF"
                placeholder="123.123.123-12"
              />
            )}

            <InputSelect callBacks={(e) => setNacionaly(e)} value={nacionaly}>
              <MenuItem value=" ">Nacionalidade</MenuItem>
              <MenuItem value="BR">Brasileiro</MenuItem>
              <MenuItem value="EXT">Outros</MenuItem>
            </InputSelect>
          </RegisterInputsFieldsBoxRow>

          <RegisterInputsFieldsBoxRow>
            <InputText
              callBacks={(e) => setEmail(e.target.value)}
              value={email}
              label="E-mail"
              placeholder="(Digite o email)"
              warningMns={messageErrorEmail}
            />
            <InputText
              callBacks={(e) => setRepeatEmail(e.target.value)}
              value={repeatEmail}
              label="Confirme o email"
              placeholder="(Digite o email)"
            />
          </RegisterInputsFieldsBoxRow>

          <RegisterInputsFieldsBoxRow>
            <InputText
              callBacks={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
              label="Senha"
              placeholder="Coloque uma senha"
              warningMns={messageErrorPassword}
            />
            <InputText
              callBacks={(e) => setRepeatPassword(e.target.value)}
              type="password"
              value={repeatPassword}
              label="Confirme sua senha"
              placeholder="Coloque uma senha"
            />
          </RegisterInputsFieldsBoxRow>

          <SendAccept>
            <Checkbox onChange={(e) => setAgreeAll(!agreeAll)} />
            <span>
              Li e estou de acordo com os{" "}
              <a href="/terms" target="_blank">
                Termos e condições de uso
              </a>{" "}
              e as <a href="">Politica de Privacidade</a>
            </span>
          </SendAccept>
          <Button
            onClick={handleSubmit}
            sx={{
              color: "#fff",
              fontSize: "19px",
              width: "300px",
              fontWeight: "300",
              textTransform: "capitalize",
              padding: "0 52px",
              borderRadius: "19px",
              backgroundColor: "#021442",
              height: "38px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            Cadastrar
          </Button>
        </RegisterInputsFieldsBox>
        <RegisterInputsFieldsBoxImage src={RegisterUserImg} alt="" />
      </RegisterContent>
    </RegisterPage>
  );
}
