import React from "react";
import { useState } from "react";
import "./styles.css";
import TextField from "@mui/material/TextField";

export function MyPassword() {
  const [name, setName] = useState("");
  const [born, setBorn] = useState("");
  const [genre, setGenre] = useState("");
  const [cpf, setCpf] = useState("");
  const [passport, setPassport] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatEmail, setRepeatEmail] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [agreeAll, setAgreeAll] = useState(false);
  const [messageErrorEmail, setMessageErrorEmail] = useState("");
  const [messageErrorPassword, setMessageErrorPassword] = useState("");
  const [allDatas, setAllDatas] = useState(  {
    name: "", 
    born: "",
    genre: "", 
    cpf: "",
    passport:"", 
    email: "",
    password: "",
    agreeAll: false,
});

  const stylesInput = {
    border: "1px solid #021442",
    borderRadius: ".4rem",
    fontSize: "1rem",
    backgroundColor: "#fff",
    paddingInline: ".5rem",
  };

  const styleError = {
    border: "1px solid #E30B22",
    borderRadius: ".4rem",
    fontSize: "1rem",
    backgroundColor: "#fff",
    paddingInline: ".5rem",
  };

  function handleValidateEmail() {
    if (!email.includes("@")) {
      setMessageErrorEmail("Por favor coloque um email válido");
    } else {
      setMessageErrorEmail("");
      return true;
    }
  }

  function handleValidatePassword() {
    console.log(repeatPassword);
    if (repeatPassword !== password) {
      setMessageErrorPassword("Senhas não coincidem");
      return false;
    } else {
      setMessageErrorPassword("");
      return true;
    }
  }


  function handleSubmit(event: any) {
    event.preventDefault();
    if (!handleValidateEmail() || !handleValidatePassword()) return false;

    setAllDatas({
      name,
      born,
      genre,
      cpf,
      passport,
      email,
      password,
      agreeAll,
    });
  }

  return (
    <div className="homeContainer">
      <div className="account-actions-container">
        <div className="form-acess-account-container-user">
          <form className="form-account" action="" onSubmit={handleSubmit}>
            <h1>Alterar Senha</h1>

            <label>Login</label>

            <TextField
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              variant="standard"
              className="registry-input"
              InputProps={{
                style: messageErrorEmail.length > 0 ? styleError : stylesInput,
                disableUnderline: true,
              }}
            />

            <span className="error">{messageErrorEmail}</span>

            <label>Senha</label>

            <TextField
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              variant="standard"
              className="registry-input"
              InputProps={{
                style:
                  messageErrorPassword.length > 0 ? styleError : stylesInput,
                disableUnderline: true,
              }}
            />

            <label>Confirmar Senha</label>

            <TextField
              onChange={(e) => setRepeatPassword(e.target.value)}
              type="password"
              variant="standard"
              className="registry-input"
              InputProps={{
                style:
                  messageErrorPassword.length > 0 ? styleError : stylesInput,
                disableUnderline: true,
              }}
            />
            <span className="error">{messageErrorPassword}</span>

            <div className="buttons">
              <button type="submit" className="button">
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
