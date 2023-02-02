import { Button, TextField,InputAdornment } from "@mui/material";

import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import WarningLayoverImage from '../../assets/images/Warning-Layover.svg'

import './style.css'

export function WarningLayover() {
    
    return (
        <>
            <main className="warning-layover">
                <div className="warning-layover-container">
                    <div className="warning-layover-image-container">
                        <img src={WarningLayoverImage} alt="" />
                    </div>
                    <div className="warning-layover-data-container">
                        <div className="warning-layover-data-flight">
                            <div className="input-infos">
                                <span>Número do voo</span>
                                <TextField
                                aria-readonly
                                value={'044-025641898'}
                                className="text-field-warning"
                                
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <FlightTakeoffIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                            <div className="input-infos">
                                <span>Local</span>
                                <TextField
                                    aria-readonly
                                    value={'Guarulhos,SP'}
                                    className="text-field-warning"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LocationOnIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                        </div>
                        <div className="warning-layover-data-airport">
                            <div className="input-infos">
                                <span>Nome do aeroporto</span>
                                <TextField
                                    aria-readonly
                                    value={'GRU Airport'}
                                    className="text-field-warning"
                                />
                            </div>
                            <div className="input-infos">
                                <span>Passageiros</span>
                                <TextField
                                    aria-readonly
                                    value={'3 passageiros'}
                                    className="text-field-warning"
                                />
                            </div>
                        </div>
                        <div className="warning-layover-hotel">
                            <h4>Lance</h4>
                            <div className='warning-layover-hotel-infos'>
                                <h5>Hotel LOREM</h5>
                                <span>3 Hóspedes</span>
                                <p>Transporte: Uber</p>
                                <div className="warning-hotel-final-price">
                                    <p>Custo Total : <span>R$ $$$$$</span></p>
                                </div>
                                <div className="hotel-actions-buttons">
                                    <Button>Não</Button>
                                    <Button>Sim</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <div className="actions-button">
                    <Button>Voltar</Button>
                    <Button>Avançar</Button>
                </div>
            </footer>
        </>
    )
}