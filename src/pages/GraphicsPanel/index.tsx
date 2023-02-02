import { useState } from "react";
import ButtonsInterface from "../../components/Buttons_Interface";
import {LineGraphic} from "./components/Graphics/Line";
import {Bars} from "./components/Graphics/Bars";
import Pies from "./components/Graphics/Pies/index.jsx";
import {Multiline} from "./components/Graphics/MultLine";
var total = "R$ XX.XX";

export default function GraphicsPanel() {
  return (
    <>
      <div className="homeContainer">
        <div className="graphics">
          <div className="value">
            <h2>Lorem Ipsum</h2>
            {LineGraphic("#0714FF")}
            <h2>Dolorsi amed</h2>
            {LineGraphic("#FF590E")}
            <h2>Sed diam</h2>
            {LineGraphic("#C12BFF")}
            <h2>Euismod tincidunt</h2>
            {LineGraphic("#FF0F00")}
            <h1>CUSTO: {total}</h1>
          </div>

          <div className="value">
            {Bars()}
            <h2>Dolore magma</h2>
            <Pies />
            <Pies />
            <Pies />
            <h1>CUSTO: {total}</h1>
          </div>

          <div className="value">
            <Multiline />
            <Pies />
            <Pies />
            <h1>CUSTO: {total}</h1>
          </div>
        </div>
      </div>

      <ButtonsInterface />
    </>
  );
}
