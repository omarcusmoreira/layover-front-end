import React, {useState} from 'react';
import { InputText } from "../../../../components/common/inputText";
import { InputSelect } from "../../../../components/common/inputSelect";
import { InputDate } from "../../../../components/common/inputDate";

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';

import {
  FlightWrap,
  FlightWrapTitle,
  FlightWrapSubTitle,
  FlightInputFieldsWrap,
  LayoverAlone,
  LayoverAloneTitle,
  LayoverAloneOptions,
} from "./styles";

export const FlightSearch = () => {
  const [flightNumber, setFlightNumber] = useState("");
  const [messageFlightNumber, setMessageFlightNumber] = useState("");
  const [flightDate, setFlightDate] = useState("");
  const [searchFlightFor, setSearchFlightFor] = useState(" ");
  
  return (
    <FlightWrap>
        <FlightWrapTitle style={{ textAlign: 'left' }}>Status de voo</FlightWrapTitle>
        <FlightWrapSubTitle style={{ textAlign: 'left' }}>
          Preencha os dados abaixo para localizar o voo
        </FlightWrapSubTitle>
        <FlightInputFieldsWrap>
          <div>
            <InputText
              callBacks={(e) => setFlightNumber(e.target.value)}
              value={flightNumber}
              label="Número do voo"
              placeholder="(Digite o número do voo)"
              warningMns={messageFlightNumber}
            /> 
          </div>
          <div>
            <InputSelect callBacks={(e) => setSearchFlightFor(e)} value={searchFlightFor}>
                <MenuItem value={" "}>Buscar por</MenuItem>
                <MenuItem value={1}>Opção 1</MenuItem>
                <MenuItem value={2}>Opção 2</MenuItem>
                <MenuItem value={3}>Opção 3</MenuItem>
            </InputSelect>
          </div>
          <div>
            <InputDate
              callBacks={(e) => setFlightDate(e.target.value)}
              value={flightDate}
              label="Data do voo"
              placeholder="(DD/MM/AAAA)"
            />
          </div>
        </FlightInputFieldsWrap>
      <LayoverAlone>
        <LayoverAloneTitle>Layover sozinho?</LayoverAloneTitle>
        <LayoverAloneOptions>
          <FormControlLabel
            control={<Checkbox name="yes" />}
            label="Sim"
            labelPlacement="bottom"
            sx={{ '& .MuiSvgIcon-root': { fontSize: 38 } }}
          />
          <FormControlLabel 
          control={<Checkbox name="no" />} 
          label="Não" 
          labelPlacement="bottom"
          sx={{ '& .MuiSvgIcon-root': { fontSize: 38 } }}/>
        </LayoverAloneOptions>
      </LayoverAlone>
    </FlightWrap>
  );
};

