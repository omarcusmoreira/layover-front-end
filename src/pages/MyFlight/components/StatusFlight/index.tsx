import React from "react";
import "./style.css";
import { TextField } from "@mui/material";

export function StatusFlight() {
  const values = {
    someDate: "99-99-9999",
  };

  return (
    <div className="homeContainer">
      <form className="forms">
        <div className="title">
          <h1>Status de voo</h1>
          <p>Preencha os dados abaixo para localizar o voo:</p>
        </div>

        <div className="boxes">
          <div className="search">
            <label>BUSCAR POR</label>
            <TextField
              id="input"
              variant="filled"
              label="Numero de voo"
              type="text"
              placeholder="Numero de voo"
            />
          </div>

          <div className="flight">
            <label>DIGITE O NUMERO DE VOO</label> <br />
            <TextField
              id="input"
              variant="filled"
              label="Digite o número"
              type="text"
              placeholder="Digite o número"
            />
          </div>

          <div className="date">
            <label>DATA</label> <br />
            <TextField
              id="input"
              variant="filled"
              name="someDate"
              InputLabelProps={{ shrink: true, required: true }}
              type="date"
              placeholder="hoje (dd/mm/aa)"
            />
          </div>
        </div>

        <div></div>
      </form>
    </div>
  );
}
