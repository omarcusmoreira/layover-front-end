import { useState } from 'react';

import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import TextField  from '@mui/material/TextField';
import Modal from '@mui/material/Modal';

import InputAdornment from '@mui/material/InputAdornment';
import WomanImage from '../../assets/images/background-flights.svg'

import './style.css'

import { Button } from '@mui/material';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import { ListConnection } from './ListConnection';

export function FlightConnection() {
    const [localStart,setLocalStart] = useState('')
    const [localEnd,setLocalEnd] = useState('')
    const [finalDatas,setFinalDatas] = useState('')
    const [hasConnection,setHasConnection] = useState(null)
    const [listConnections,setListConnections] = useState([])
    const [openModal,setOpenModal] = useState(false)
    const [connectionTyped,setConnectionsTyped] = useState('')

    function handleSubmit(event) {
        event.preventDefault()

        setFinalDatas({
            localEnd,
            localStart,
            listConnections
        })

        console.log(listConnections)
    }

    function handleAddNewConnection() {
        
        setListConnections(oddValues => [...oddValues,connectionTyped])
        setOpenModal(false)
        setConnectionsTyped('')
       
    }

    function handleUptade(connection,index) {
        const array = [...listConnections];
        array.splice(index, 1, connection);
        setListConnections(array)
    }

    function handleRemove(index) {
        const array = [...listConnections];
        array.splice(index, 1);
        setListConnections(array)
    }
        

    return (
        <div className="flight-connection">
            <div className="flight-connection-text">
                <img src={WomanImage} alt="" />
                <h4>Olá! Vamos ver se a companhia aérea pode estar te devendo uma compensação</h4>
            </div>
            <div className="flight-connection-actions">
                <form onSubmit={handleSubmit}>
                    <h5>Para onde foi o voo ?</h5>
                    <div className="flight-connection-fly-actions">
                        <div className="flight-connection-fly">
                            <label htmlFor="">Partida de</label>
                            <TextField 
                                className='input-text-field'
                                variant='standard'
                                InputProps={{
                                    disableUnderline:true,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                          <FlightLandIcon />
                                        </InputAdornment>
                                      ),
                                }}
                                placeholder='ex.: São Paulo - Guarulhos'
                                onChange={e => {setLocalStart(e.target.value)}}
                            />
                        </div>
                        <div className="flight-connection-fly">
                        <label htmlFor="">Destino</label>
                            <TextField 
                                className='input-text-field'
                                variant='standard'
                                InputProps={{
                                    disableUnderline:true,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                          <FlightLandIcon />
                                        </InputAdornment>
                                      ),
                                }}
                                placeholder='ex.: São Paulo - Guarulhos'
                                onChange={e => {setLocalEnd(e.target.value)}}
                            />
                        </div>
                    </div>
                    <div className="flight-connection-add">
                        <p>Você tem alguma conexão?</p>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            className="radio-buttons-group"
                        >
                            <FormControlLabel 
                                value="yes" 
                                control={<Radio checked={hasConnection}/>} 
                                label="Sim"
                                className={hasConnection? 'container-option-checked':'container-option'}
                                onChange={
                                    e => {
                                        setOpenModal(true);
                                        setHasConnection(true)
                                    }
                                }
                            />
                            <FormControlLabel 
                                value="no" 
                                control={<Radio checked={!hasConnection}/>} label="Não" 
                                className={hasConnection === false? 'container-option-checked':'container-option'}
                                onChange={
                                    e => {
                                        setOpenModal(false);
                                        setHasConnection(false);
                                        setListConnections([])
                                    }
                                }
                            />
                        </RadioGroup>
                        <div className="list-of-connections">
                            {listConnections.map((value,key)=>(
                                <ListConnection 
                                    connection={value} 
                                    index={key} 
                                    updated={handleUptade} 
                                    remove={handleRemove}
                                />
                            ))}
                            <Button
                                onClick={()=>{setOpenModal(true)}}
                            >
                                {listConnections.length === 0? 'Adicionar uma conexão':'Adicionar mais uma conexão'}
                            </Button>
                        </div>     
                    </div>
                </form>
            </div>
            <Modal open={openModal} className='modal'>
                <div className="modal-flight-connection">
                    <h3 htmlFor="">Onde você fez uma conexão ?</h3>
                    <div className="modal-flight-form">
                        <label htmlFor="">Nome do aeroporto</label>
                        <TextField 
                            variant='standard'
                            InputProps={{
                                disableUnderline:true,
                            }}
                            placeholder='Ex.: São Paulo- Guarulhos'
                            onChange={e => setConnectionsTyped(e.target.value)}
                        />
                    </div>
                    <div className="modal-flight-actions">
                        <Button onClick={()=>{setOpenModal(false)}}>Sair</Button>
                        <Button onClick={handleAddNewConnection}>Salvar</Button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}