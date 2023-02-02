import React from "react";
import { useState, forwardRef } from "react";
import "./styles.css";
import information from "../../assets/images/information2.svg";
import details from "../../assets/images/details.svg";
import IncludePassagerForms from "../Include_Passager_Forms";

export default function IncludePassager() {
  const [listPassager, setListPassager] = useState([
    { name: "", cpf: "", tel: "", voo: "", index: undefined },
  ]);

  function AddPassager() {
    setListPassager((element: any) => [
      ...element,
      { name: "", cpf: "", tel: "", voo: "", index: listPassager.length },
    ]);
  }

  function RemovePassagerIndex(index: any) {
    const array = listPassager;
    array.splice(index, 1);
    setListPassager([...array]);
  }

  return (
    <div className="homeContainer">
      <form className="forms">
        <h1>Adicionar Passageiro</h1>
        <p>Preencha os dados abaixo</p>

        {listPassager.map((value, index) => (
          <IncludePassagerForms
            RemovePassagerIndex={RemovePassagerIndex}
            index={value.index}
            key={index}
          />
        ))}

        <div className="add">
          <button type="button" onClick={AddPassager} className="button_add">
            {" "}
            + Passageiro{" "}
          </button>
        </div>

        <div className="buttons">
          <div className="buttons_interface">
            <button type="submit" className="button_advence">
              Avan�ar
            </button>
            <button type="button" className="button_back">
              Voltar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
