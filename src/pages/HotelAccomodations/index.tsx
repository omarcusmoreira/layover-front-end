import { useNavigate } from 'react-router-dom'
import { Button, Checkbox, MenuItem, Modal, Select, TextField } from "@mui/material";
import { useState } from "react";
import { Dropzone } from "../../components/DropZone";
import { LanguageDescription } from "../../components/LanguageDescription/LanguageDescription";
import { RoomDescription } from "../../components/Common/RoomDescription";
import { InputText } from "../../components/Common/inputText"
import { InputSelect } from "../../components/Common/inputSelect"

import {
    HotelAccomodationsPage,
    HotelAccomodationsContent,
    HotelAccomodationsContentRow,
    HotelAccomodationsRowTitle,
    HotelAccomodationsRowSubTitle,
    HotelAccomodationsRowInputWrap,
    HotelAccomodationsRowCheckboxWrap,
    ListRoomDescription,
    AccommodationsHotelsModal,
    AccommodationsHotelsModalTitle,
    AccommodationsHotelsModalForm,
    AccommodationsHotelsModalFormRow,
    AccommodationsHotelsModalFormButtonsWrap,
    ActionsButtonsWrap,
} from "./styles";


export function HotelsAccommodations() {

    const navigate = useNavigate()

    const [hasPark, setHasPark] = useState("0")
    const [hasBreakfast, setHasBreakfast] = useState("0")

    const [listLanguages, setListLanguages] = useState([{ language: 'en', level: 'Begginer' }])
    const [objLanguage, setObjLanguage] = useState({})

    const [descriptionComm, setDescritionComm] = useState('')

    const [listAccomodations, setListAccommodations] = useState([])
    const [photos, setPhotos] = useState()

    const [openModal, setOpenModal] = useState(false)
    const [typeRoom, setTypeRoom] = useState('single')
    const [quantityRoom, setQuantityRoom] = useState(1)
    const [priceRoom, setPriceRoom] = useState(10)

    const [listRoom, setListRoom] = useState([])


    function handleAddLanguage() {
        setListLanguages(olds => [...olds, { language: 'en', level: 'Begginer' }])
    }

    function changeLanguge(language, level, index) {
        const newArr = listLanguages
        newArr[index] = { language, level }
        setListLanguages([...newArr])
    }

    function handleAccepted() {
        console.log(photos)
    }

    function handleCloseModal() { return setOpenModal(false) }

    function handleRemove(index) {
        const arrCopy = listLanguages
        arrCopy.splice(index, 1)
        setListLanguages([...arrCopy])
    }

    function handleAccommodations(value) {
        const newArr = listAccomodations
        if (newArr.includes(value)) {
            const pos = newArr.indexOf(value)
            newArr.slice(pos, 1)
            setListAccommodations([...newArr])
        }
        else {
            setListAccommodations(olds => [...olds, value])
        }
    }

    function handleAddRoom(objRoomInfos) {
        setListRoom(olds => [...olds, objRoomInfos])
        setPriceRoom(10)
        setQuantityRoom(1)
        setTypeRoom('single')
    }

    function handleRemoveRoom(index) {
        const arrCopy = listRoom
        arrCopy.splice(index, 1)
        setListRoom([...arrCopy])
    }

    return (
        <>
            <HotelAccomodationsPage>
                <HotelAccomodationsContent action="">
                    <HotelAccomodationsContentRow>
                        <div>
                            <HotelAccomodationsRowTitle>
                                Estacionameto
                            </HotelAccomodationsRowTitle>
                            <HotelAccomodationsRowSubTitle>
                                Vocês oferecem estacionamento para os hóspedes?
                            </HotelAccomodationsRowSubTitle>
                            <HotelAccomodationsRowInputWrap>
                                <InputSelect callBacks={(e) => setHasPark(e)} value={hasPark}>
                                    <MenuItem value={"0"}>Não</MenuItem>
                                    <MenuItem value={"1"}>Sim</MenuItem>
                                </InputSelect>
                            </HotelAccomodationsRowInputWrap>
                        </div>
                    </HotelAccomodationsContentRow>

                    <HotelAccomodationsContentRow>
                        <HotelAccomodationsRowTitle>
                            Café da manhã
                        </HotelAccomodationsRowTitle>
                        <HotelAccomodationsRowSubTitle>
                            Vocês oferecem café da manhã para os hóspedes?
                        </HotelAccomodationsRowSubTitle>
                        <HotelAccomodationsRowInputWrap>
                            <InputSelect callBacks={(e) => setHasBreakfast(e)} value={hasBreakfast}>
                                <MenuItem value={"0"}>Não</MenuItem>
                                <MenuItem value={"1"}>Sim</MenuItem>

                            </InputSelect>
                        </HotelAccomodationsRowInputWrap>
                    </HotelAccomodationsContentRow>

                    <HotelAccomodationsContentRow>
                        <div>
                            <h2>Idiomas falados</h2>
                            <span>Quais idiomas você ou sua equipe falam ?</span>
                            <div>
                                <div>
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
                                onClick={handleAddLanguage}
                                id='language-button'
                            >Adicionar</Button>
                        </div>
                    </HotelAccomodationsContentRow>

                    <HotelAccomodationsContentRow>
                        <HotelAccomodationsRowTitle>
                            Comodidades
                        </HotelAccomodationsRowTitle>
                        <HotelAccomodationsRowSubTitle>
                            Quais comodidades vocês oferecem?
                        </HotelAccomodationsRowSubTitle>
                        <HotelAccomodationsRowInputWrap>
                            <HotelAccomodationsRowCheckboxWrap>
                                <div><Checkbox onChange={() => { handleAccommodations('wifi') }} /> <span>Wi-fi gratuito</span></div>
                                <div><Checkbox onChange={() => { handleAccommodations('Restautrante') }} /> <span>Restautrante</span></div>
                                <div><Checkbox onChange={() => { handleAccommodations('Serviço-de-quarto') }} /> <span>Serviço de quarto</span></div>
                                <div><Checkbox onChange={() => { handleAccommodations('Quarto-para-a-família') }} /> <span>Quarto para a família</span></div>
                                <div><Checkbox onChange={() => { handleAccommodations('Recepção-24-horas') }} /> <span>Recepção 24 horas</span></div>
                                <div><Checkbox onChange={() => { handleAccommodations('Ar-condicionado') }} /> <span>Ar condicionado</span></div>
                            </HotelAccomodationsRowCheckboxWrap>
                            <InputText callBacks={(e) => setDescritionComm(e.target.value)} type="password" value={descriptionComm} label="Outra? Especifique abaixo" />

                        </HotelAccomodationsRowInputWrap>

                    </HotelAccomodationsContentRow>

                    <HotelAccomodationsContentRow>
                        <HotelAccomodationsRowTitle>
                            Quartos
                        </HotelAccomodationsRowTitle>
                        <HotelAccomodationsRowSubTitle>
                            Insira aqui as informações dos quartos
                        </HotelAccomodationsRowSubTitle>
                        <Button
                            onClick={() => { setOpenModal(true) }}
                            sx={{ color: "#fff", float:"right", marginTop:"-40px", fontSize: "19px", width: "200px", fontWeight: "300", textTransform: "capitalize", padding: "0 52px", borderRadius: "19px", backgroundColor: "#021442", height: "38px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", '&:hover': {color: '#000', backgroundColor: '#fff'} }}>
                            Adicionar
                        </Button>

                        <ListRoomDescription>
                            {
                                listRoom.length > 0 ?
                                    listRoom.map((value, key) => (
                                        <RoomDescription
                                            type={value.typeRoom}
                                            price={value.priceRoom}
                                            quantity={value.quantityRoom}
                                            index={key}
                                            handleRemove={handleRemoveRoom}
                                            key={key}
                                        />
                                    )) :
                                    <span>Nenhum quarto adicionado ainda</span>
                            }
                        </ListRoomDescription>
                    </HotelAccomodationsContentRow>


                    <HotelAccomodationsContentRow>
                        <div className="accommodations-hotels-form-item">
                            <h2>Fotos</h2>
                            <span>Insira aqui as informações dos quartos</span>
                            <div className="droparea">
                                <Dropzone handleAccepted={handleAccepted} photo={setPhotos} />
                            </div>
                        </div>
                    </HotelAccomodationsContentRow>

                    <ActionsButtonsWrap>
                        <Button
                            onClick={() => { navigate('/register-hotel') }}
                            sx={{ color: "#fff", fontSize: "19px", width: "200px", fontWeight: "300", textTransform: "capitalize", padding: "0 52px", borderRadius: "19px", backgroundColor: "#021442", height: "38px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", '&:hover': {color: '#000', backgroundColor: '#fff'}  }}>

                        Voltar</Button>
                        <Button
                            sx={{ color: "#fff", fontSize: "19px", width: "200px", fontWeight: "300", textTransform: "capitalize", padding: "0 52px", borderRadius: "19px", backgroundColor: "#021442", height: "38px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", '&:hover': {color: '#000', backgroundColor: '#fff'}  }}>
                        Avançar</Button>
                    </ActionsButtonsWrap>
                </HotelAccomodationsContent>
            </HotelAccomodationsPage>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                children={
                    <AccommodationsHotelsModal>
                        <AccommodationsHotelsModalTitle>Informações sobre o quarto</AccommodationsHotelsModalTitle>
                            <AccommodationsHotelsModalForm action="">
                                    <AccommodationsHotelsModalFormRow>
                                        <InputSelect callBacks={(e) => setTypeRoom(e)} value={typeRoom}>
                                            <MenuItem value='single'>Single</MenuItem>
                                            <MenuItem value='double'>Double</MenuItem>
                                            <MenuItem value='kids'>Kids</MenuItem>
                                        </InputSelect>
                                    </AccommodationsHotelsModalFormRow>
                                    <AccommodationsHotelsModalFormRow>
                                        <InputText callBacks={(e) => setQuantityRoom(e.target.value)}  value={quantityRoom} type={"number"} label="Quantidade"/>
                                        <InputText callBacks={(e) => setPriceRoom(e.target.value)}  value={priceRoom} type={"number"} label="Preço"/>
                                    </AccommodationsHotelsModalFormRow>

                                <AccommodationsHotelsModalFormButtonsWrap>
                                    <Button onClick={handleCloseModal}
                                    sx={{ color: "#fff", fontSize: "19px", width: "200px", fontWeight: "300", textTransform: "capitalize", padding: "0 52px", borderRadius: "19px", backgroundColor: "#021442", height: "38px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", '&:hover': {color: '#000', backgroundColor: '#fff'}  }}>
                                        Cancelar
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            const objRoom = {
                                                priceRoom,
                                                typeRoom,
                                                quantityRoom
                                            }
                                            handleCloseModal()
                                            handleAddRoom(objRoom)
                                        }}
                                        sx={{ color: "#fff", fontSize: "19px", width: "200px", fontWeight: "300", textTransform: "capitalize", padding: "0 52px", borderRadius: "19px", backgroundColor: "#021442", height: "38px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", '&:hover': {color: '#000', backgroundColor: '#fff'}  }}>
                                            Salvar
                                        </Button>
                                </AccommodationsHotelsModalFormButtonsWrap>
                            </AccommodationsHotelsModalForm>
                    </AccommodationsHotelsModal>
                }
            />
        </>

    )
}