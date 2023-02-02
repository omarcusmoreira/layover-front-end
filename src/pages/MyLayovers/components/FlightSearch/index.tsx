import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
} from '@mui/material';

import {
  FlightWrap,
  FlightContent,
  FlightWrapTitle,
  FlightWrapSubTitle,
} from "./styles";


export const FlightSearch = () => {
  return (
    <FlightWrap>
      <FlightContent>
        <FlightWrapTitle style={{ textAlign: 'left' }}>Status de voo</FlightWrapTitle>
        <FlightWrapSubTitle style={{ textAlign: 'left' }}>
          Preencha os dados abaixo para localizar o voo
        </FlightWrapSubTitle>
      <Box display="flex" justifyContent="center" mt={3} mb={3}>
        <FormControl style={{ width: '50%' }}>
          <InputLabel id="search-by-label">Buscar por</InputLabel>
          <Select labelId="search-by-label" style={{ width: '100%' }}>
            <MenuItem value={1}>Opção 1</MenuItem>
            <MenuItem value={2}>Opção 2</MenuItem>
            <MenuItem value={3}>Opção 3</MenuItem>
          </Select>
        </FormControl>
        <TextField
          style={{ width: '50%' }}
          id="flight-number"
          label="Digite o número do voo"
          variant="outlined"
        />
        <TextField
          style={{ width: '50%' }}
          id="flight-date"
          label="Data do voo"
          type="date"
          variant="outlined"
        />
      </Box>
      <Box display="flex" flexDirection="row" mt={3} mb={3}>
        <span>Layover sozinho?</span>
        <FormControlLabel
          control={<Checkbox name="yes" />}
          label="Sim"
        />
        <FormControlLabel control={<Checkbox name="no" />} label="Não" />
      </Box>
      <Box display="flex" justifyContent="center" mt={3} mb={3}>
        <Button variant="contained">Voltar</Button>
        <Button variant="contained">Avançar</Button>
      </Box>
      </FlightContent>
    </FlightWrap>
  );
};

