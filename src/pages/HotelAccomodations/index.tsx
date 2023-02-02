import { useNavigate } from "react-router-dom";
import {
  Button,
  Checkbox,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Dropzone } from "../../components/DropZone";
import { LanguageDescription } from "../../components/LanguageDescription/LanguageDescription";
import { RoomDescription } from "../../components/RoomDescription";

export function HotelsAccommodations() {
  const navigate = useNavigate();

  const [hasPark, setHasPark] = useState(false);
  const [hasBreakfast, setHasBreakfast] = useState(false);

  const [listLanguages, setListLanguages] = useState([
    { language: "en", level: "Begginer" },
  ]);
  const [objLanguage, setObjLanguage] = useState({});

  const [descriptionComm, setDescritionComm] = useState("");

  const [listAccomodations, setListAccommodations] = useState([]);
  const [photos, setPhotos] = useState();

  const [openModal, setOpenModal] = useState(false);
  const [typeRoom, setTypeRoom] = useState("single");
  const [quantityRoom, setQuantityRoom] = useState(1);
  const [priceRoom, setPriceRoom] = useState(10);

  const [listRoom, setListRoom] = useState([]);

  function handleAddLanguage() {
    setListLanguages((olds) => [
      ...olds,
      { language: "en", level: "Begginer" },
    ]);
  }

  function changeLanguge(language: any, level: any, index: any) {
    const newArr = listLanguages;
    newArr[index] = { language, level };
    setListLanguages([...newArr]);
  }

  function handleAccepted() {
    console.log(photos);
  }

  function handleCloseModal() {
    return setOpenModal(false);
  }

  function handleRemove(index: any) {
    const arrCopy = listLanguages;
    arrCopy.splice(index, 1);
    setListLanguages([...arrCopy]);
  }

  function handleAccommodations(value: any) {
    // const newArr = listAccomodations;
    // if (newArr.includes(value)) {
    //   const pos = newArr.indexOf(value);
    //   newArr.slice(pos, 1);
    //   setListAccommodations([...newArr]);
    // } else {
    //   setListAccommodations((olds) => [...olds, value]);
    // }
  }

  function handleAddRoom(objRoomInfos: any) {
    // setListRoom((olds) => [...olds, objRoomInfos]);
    // setPriceRoom(10);
    // setQuantityRoom(1);
    // setTypeRoom("single");
  }

  function handleRemoveRoom(index: any) {
    const arrCopy = listRoom;
    arrCopy.splice(index, 1);
    setListRoom([...arrCopy]);
  }

  return (
    <>
      <div className="accommodations-hotels-container">
        <div className="accommodations-hotels-form">
          <form action="">
            <div className="accommodations-hotels-form-item">
              <h2>Estacionameto</h2>
              <span>Vocês oferecem estacionamento para os hóspedes</span>
              <Select
                className="select-actions"
                value={hasPark}
                onChange={(e) => setHasPark(!!e.target.value)}
              >
                <MenuItem value={"yes"}>Sim</MenuItem>
                <MenuItem value={"no"}>Não</MenuItem>
              </Select>
            </div>
            <div className="accommodations-hotels-form-item">
              <h2>Café da manhã</h2>
              <span>Vocês oferecem café da manhã para os hóspedes</span>
              <Select
                value={hasBreakfast}
                onChange={(e) => setHasBreakfast(!!e.target.value)}
                className="select-actions"
              >
                <MenuItem value={"yes"}>Sim</MenuItem>
                <MenuItem value={"no"}>Não</MenuItem>
              </Select>
            </div>
            <div className="accommodations-hotels-form-item">
              <h2>Idiomas falados</h2>
              <span>Quais idiomas você ou sua equipe falam ?</span>
              <div className="form-spec-items">
                <div className="select-container">
                  {listLanguages.map((value, key) => (
                    <LanguageDescription
                      handleChange={changeLanguge}
                      handleRemove={handleRemove}
                      languageSelect={value.language}
                      levelSelect={value.level}
                      index={key}
                      key={key}
                    />
                  ))}
                </div>
              </div>
              <Button
                className="button-actions"
                onClick={handleAddLanguage}
                id="language-button"
              >
                Adicionar
              </Button>
            </div>
            <div className="accommodations-hotels-form-item">
              <h2>Comodidades</h2>
              <span>Quais comodidades vocês oferecem ?</span>
              <div className="checkbox-spec-item">
                <div>
                  <Checkbox
                    onChange={() => {
                      handleAccommodations("wifi");
                    }}
                  />{" "}
                  <span>Wi-fi gratuito</span>
                </div>
                <div>
                  <Checkbox
                    onChange={() => {
                      handleAccommodations("Restautrante");
                    }}
                  />{" "}
                  <span>Restautrante</span>
                </div>
                <div>
                  <Checkbox
                    onChange={() => {
                      handleAccommodations("Serviço-de-quarto");
                    }}
                  />{" "}
                  <span>Serviço de quarto</span>
                </div>
                <div>
                  <Checkbox
                    onChange={() => {
                      handleAccommodations("Quarto-para-a-família");
                    }}
                  />{" "}
                  <span>Quarto para a família</span>
                </div>
                <div>
                  <Checkbox
                    onChange={() => {
                      handleAccommodations("Recepção-24-horas");
                    }}
                  />{" "}
                  <span>Recepção 24 horas</span>
                </div>
                <div>
                  <Checkbox
                    onChange={() => {
                      handleAccommodations("Ar-condicionado");
                    }}
                  />{" "}
                  <span>Ar condicionado</span>
                </div>
              </div>
              <textarea
                className="description"
                onChange={(e) => setDescritionComm(e.target.value)}
                placeholder="Coloque aqui alguma outra comodidade fornecida pelo hotel..."
              />
            </div>
            <div className="accommodations-hotels-form-item">
              <h2>Quartos</h2>
              <span>Insira aqui as informações dos quartos</span>
              <Button
                className="button-actions"
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                Adicionar
              </Button>
              <div>
                <ul className="list-room-description">
                  {listRoom.length > 0 ? (
                    listRoom.map((value: any, key) => (
                      <li>
                        <RoomDescription
                          type={value.typeRoom}
                          price={value.priceRoom}
                          quantity={value.quantityRoom}
                          index={key}
                          handleRemove={handleRemoveRoom}
                          key={key}
                        />
                      </li>
                    ))
                  ) : (
                    <span>Nenhum quarto adicionado ainda</span>
                  )}
                </ul>
              </div>
            </div>
            <div className="accommodations-hotels-form-item">
              <h2>Fotos</h2>
              <span>Insira aqui as informações dos quartos</span>
              <div className="droparea">
                <Dropzone handleAccepted={handleAccepted} photo={setPhotos} />
              </div>
            </div>
          </form>
          <div className="actions-buttons">
            <Button
              onClick={() => {
                navigate("/register-hotel");
              }}
            >
              Voltar
            </Button>
            <Button>Avançar</Button>
          </div>
        </div>
      </div>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        className="accommodations-modal"
        children={
          <div className="accommodations-hotels-modal">
            <h4>Informações sobre o quarto</h4>
            <div className="accommodations-hotels-modal-form">
              <form action="">
                <div className="accommodations-hotels-modal-form-infos">
                  <div className="accommodations-hotels-modal-form-infos-item">
                    <span>Tipo</span>
                    <Select
                      className="modal-select"
                      onChange={(e) => setTypeRoom(e.target.value)}
                      value={typeRoom}
                    >
                      <MenuItem value="single">Single</MenuItem>
                      <MenuItem value="double">Double</MenuItem>
                      <MenuItem value="kids">Kids</MenuItem>
                    </Select>
                  </div>
                  <div className="accommodations-hotels-modal-form-infos-item">
                    <span>Quantidade</span>
                    <TextField
                      className="modal-text-field"
                      onChange={(e) => setQuantityRoom(Number(e.target.value))}
                      value={quantityRoom}
                    />
                  </div>
                  <div className="accommodations-hotels-modal-form-infos-item">
                    <span>Preço</span>
                    <TextField
                      className="modal-text-field"
                      onChange={(e) => setPriceRoom(Number(e.target.value))}
                      value={priceRoom}
                    />
                  </div>
                </div>
                <div className="accommodations-hotels-modal-form-buttons">
                  <Button onClick={handleCloseModal}>Cancelar</Button>
                  <Button
                    onClick={() => {
                      const objRoom = {
                        priceRoom,
                        typeRoom,
                        quantityRoom,
                      };
                      handleCloseModal();
                      handleAddRoom(objRoom);
                    }}
                  >
                    Salvar
                  </Button>
                </div>
              </form>
            </div>
          </div>
        }
      />
    </>
  );
}
