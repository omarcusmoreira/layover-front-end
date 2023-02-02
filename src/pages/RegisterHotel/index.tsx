import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import { InputText } from "../../components/common/inputText";
import { InputSelect } from "../../components/common/inputSelect";
import RegisterUserImg from "../../assets/images/registerHotel.svg";

import {
  RegisterPage,
  RegisterContent,
  RegisterInputsFieldsBox,
  RegisterInputsFieldsBoxRow,
  RegisterInputsFieldsBoxImage,
  RegisterTitle,
  SendAccept,
  SubTitle,
} from "./styles";
export function RegisterHotel() {
  const [fantasyName, setFantasyName] = useState("");
  const [stars, setStars] = useState("0");
  const [social, setSocial] = useState("");
  const [cep, setCep] = useState("");
  const [adress, setAdress] = useState("");
  const [neighboor, setNeighboor] = useState("");
  const [country, setCountry] = useState(" ");
  const [city, setCity] = useState(" ");
  const [state, setState] = useState(" ");
  const [compl, setCompl] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [repeatEmail, setRepeatEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [agreeAll, setAgreeAll] = useState(false);

  const navigate = useNavigate();

  return (
    <RegisterPage>
      <RegisterContent>
        <RegisterInputsFieldsBox>
          <RegisterTitle>Cadastro Hotel</RegisterTitle>

          <RegisterInputsFieldsBoxRow>
            <InputText
              callBacks={(event: any) =>
                setFantasyName(event.target.value)
              }
              value={fantasyName}
              label="Nome Fantasia"
              placeholder="(Conforme o documento)"
            />
          </RegisterInputsFieldsBoxRow>

          <RegisterInputsFieldsBoxRow>
            <InputText
              callBacks={(event: any) =>
                setSocial(event.target.value)
              }
              value={social}
              label="Razão Social"
              placeholder="(Conforme o documento)"
            />
            <InputSelect
              callBacks={(event: any) =>
                setStars(event.target.value)
              }
              value={stars}
            >
              <MenuItem value={0}>Número de estrelas</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </InputSelect>
          </RegisterInputsFieldsBoxRow>

          <SubTitle>Onde está localizada sua propriedade?</SubTitle>

          <RegisterInputsFieldsBoxRow>
            <InputText
              callBacks={(event: any) =>
                setAdress(event.target.value)
              }
              value={adress}
              label="Endereço"
              placeholder=""
            />
            <InputText
              callBacks={(event: any) =>
                setNeighboor(event.target.value)
              }
              value={neighboor}
              label="Bairro"
              placeholder=""
            />
          </RegisterInputsFieldsBoxRow>

          <RegisterInputsFieldsBoxRow>
            <InputText
              callBacks={(event: any) =>
                setCity(event.target.value)
              }
              value={city}
              label="Cidade"
              placeholder=""
            />
            <InputSelect
              callBacks={(event: any) =>
                setState(event.target.value)
              }
              value={state}
            >
              <MenuItem value={" "}>UF</MenuItem>
              <MenuItem value={"SP"}>SP</MenuItem>
              <MenuItem value={"RJ"}>RJ</MenuItem>
              <MenuItem value={"CE"}>CE</MenuItem>
              <MenuItem value={"AC"}>AC</MenuItem>
            </InputSelect>
            <InputSelect
              callBacks={(event: any) =>
                setCountry(event.target.value)
              }
              value={country}
            >
              <MenuItem value={" "}>País</MenuItem>
              <MenuItem value={"BR"}>Brasil</MenuItem>
              <MenuItem value={"EUA"}>EUA</MenuItem>
              <MenuItem value={"PT"}>Portugal</MenuItem>
            </InputSelect>
          </RegisterInputsFieldsBoxRow>

          <RegisterInputsFieldsBoxRow>
            <InputText
              callBacks={(event: any) =>
                setCompl(event.target.value)
              }
              value={compl}
              label="Complemento"
              placeholder=""
            />
          </RegisterInputsFieldsBoxRow>

          <RegisterInputsFieldsBoxRow>
            <InputText
              callBacks={(event: any) =>
                setPhone(event.target.value)
              }
              value={phone}
              label="Telefone"
              placeholder=""
            />
            <InputText
              callBacks={(event: any) =>
                setCep(event.target.value)
              }
              value={cep}
              label="Cep"
              placeholder=""
            />
          </RegisterInputsFieldsBoxRow>

          <RegisterInputsFieldsBoxRow>
            <InputText
              callBacks={(event: any) =>
                setEmail(event.target.value)
              }
              value={email}
              label="E-mail"
              placeholder="(Digite o email)"
            />
            <InputText
              callBacks={(event: any) =>
                setRepeatEmail(event.target.value)
              }
              value={repeatEmail}
              label="Confirme o email"
              placeholder="(Digite o email)"
            />
          </RegisterInputsFieldsBoxRow>

          <RegisterInputsFieldsBoxRow>
            <InputText
              callBacks={(event: any) =>
                setPassword(event.target.value)
              }
              type="password"
              value={password}
              label="Senha"
              placeholder="Coloque uma senha"
            />
            <InputText
              callBacks={(event: any) =>
                setRepeatPassword(event.target.value)
              }
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
            sx={{
              color: "#fff",
              fontSize: "19px",
              width: "200px",
              fontWeight: "300",
              textTransform: "capitalize",
              padding: "0 52px",
              borderRadius: "19px",
              backgroundColor: "#021442",
              height: "38px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            avançar
          </Button>
        </RegisterInputsFieldsBox>

        <RegisterInputsFieldsBoxImage src={RegisterUserImg} alt="" />
      </RegisterContent>
    </RegisterPage>
  );
}
