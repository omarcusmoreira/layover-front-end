import { useState } from 'react'
import womanImage from '../../assets/images/image-flight-cancel.svg'
import { FormControlLabel,Radio,RadioGroup } from "@mui/material";

import './style.css'

export function FlightProblems() {
    const [isLate,setIsLate] = useState(false)

    const[lessThree,setLessThree] = useState(true)
    const[moreThree,setMoreThree] = useState(false)
    const[dontComing,setDontComing] = useState(false)

    return (
    <div className="flight-cancel-container">
        <form action="" className="flight-cancel-form">
            <div className="flight-cancel-form-container">
                <div className="flight-cancel-content">
                    <div className="flight-cancel-form-text">
                        <p>Agora, vamos falar sobre seu voo. Qual foi o problema?</p>
                        <img src={womanImage} alt="" />
                    </div>
                    <div className="flight-cancel-form-alternatives">
                        <RadioGroup
                            defaultValue="female"
                            className="search-flight-radio-buttons-group"
                        >
                            
                        <FormControlLabel 
                                value="yes" 
                                control={
                                    <Radio className='radio' checked={isLate}/>
                                } 
                                checked={isLate}
                                label="Meu voo atrasou"
                                className={!isLate?'flight-cancel-alternative':'flight-cancel-alternative-checked'}
                                onChange={
                                    e => {
                                        setIsLate(true)
                                    }
                                }
                            />
                            <FormControlLabel 
                                value="Meu voo foi cancelado" 
                                control={<Radio className='radio' checked={!isLate}/>} 
                                label="Meu voo cancelo"
                                className={isLate?'flight-cancel-alternative':'flight-cancel-alternative-checked'}
                                onChange={
                                    e => {
                                        setIsLate(false)
                                    }
                                }
                            />
                        </RadioGroup>
                    </div>
                    {isLate && 
                    <div>
                        <div className="flight-cancel-form-text">
                        <p>Quantas horas de atraso?</p>
                        <img src={womanImage} alt="" />
                    </div>
                    <div className="flight-cancel-form-alternatives">
                        <RadioGroup
                            defaultValue="female"
                            className="search-flight-radio-buttons-group"
                        >
                            
                        <FormControlLabel 
                                value="yes" 
                                control={
                                    <Radio className='radio' checked={lessThree}/>
                                } 
                                checked={isLate}
                                label="Atrasou menos de 3 horas"
                                className={!lessThree?'flight-cancel-alternative':'flight-cancel-alternative-checked'}
                                onChange={
                                    e => {
                                        setLessThree(true)
                                        setMoreThree(false)
                                        setDontComing(false)
                                    }
                                }
                            />
                            <FormControlLabel 
                                value="Meu voo foi cancelado" 
                                control={<Radio className='radio' checked={moreThree}/>} 
                                label="Atrasou menos de 3 horas"
                                className={!moreThree?'flight-cancel-alternative':'flight-cancel-alternative-checked'}
                                onChange={
                                    e => {
                                        setLessThree(false)
                                        setMoreThree(true)
                                        setDontComing(false)
                                    }
                                }
                            />
                            <FormControlLabel 
                                value="Meu voo foi cancelado" 
                                control={<Radio className='radio' checked={dontComing}/>} 
                                label="Atrasou voo não chegou "
                                className={!dontComing?'flight-cancel-alternative':'flight-cancel-alternative-checked'}
                                onChange={
                                    e => {
                                        setLessThree(false)
                                        setMoreThree(false)
                                        setDontComing(true)
                                    }
                                }
                            />
                        </RadioGroup>
                    </div>
                    </div>}
                </div>
                <div className="desktop-image-flight-cancel">
                    <img src={womanImage} alt="" />
                </div>
            </div>
        </form>
        
    </div>
    )
}