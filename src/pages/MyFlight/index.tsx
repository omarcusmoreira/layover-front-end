import { useEffect, useState } from 'react'

import { Button,FormControlLabel,Checkbox } from '@mui/material'
import { FlightConnection } from './components/FlightConnection'
import { Navigation } from '../../components/Navigation'
import IncludePassager from './components/IncludePassenger'
import {StatusFlight} from './components/StatusFlight'
import { FlightProblems } from '../../components/FlightProblems'
import './style.css'

export function MyFlight() {
    const [actualStage,setActualStage]  = useState(0)
    const [isAlone,setIsAlone] = useState(true)
    const [listStages,setListStage] = useState([<StatusFlight />,<IncludePassager />,<FlightConnection/>,<FlightProblems/>])

    const handlePassStage = () => {setActualStage(actualStage + 1)}
    const handleBackStage = () => {setActualStage(actualStage - 1)}

    useEffect(()=>{
        if(isAlone) setListStage([<StatusFlight />,<FlightConnection/>,<FlightProblems/>])
        else setListStage([<StatusFlight />,<IncludePassager />,<FlightConnection/>,<FlightProblems/>])
    },[isAlone])

    return (

            <div className="flight-page-status">
                <aside>
                    <Navigation isAlone={isAlone} index={actualStage} returnIndex={setActualStage} />
                </aside>
                <main>
                    {listStages[actualStage]}
                    {actualStage === 0 && <div className="search-flight-form-is-alone">
                    <label htmlFor="">Layover Sozinho?</label>
                        <div className="search-flight-form-fields">
                            <div className='search-flight-form-is-alone-field'>
                                
                                <FormControlLabel 
                                    label="testLabel"
                                    control={
                                        <Checkbox
                                            checked={isAlone} 
                                            onChange={e => {
                                                setIsAlone(true)
                                            }}
                                            sx={{
                                                color: '#021442',
                                                '&.Mui-checked': {
                                                    color: '#021442',
                                                }
                                            }}
                                        /> 
                                    }
                                />
                                <span>Sim</span>
                                
                            </div>
                            <div className='search-flight-form-is-alone-field'>
                                
                                <FormControlLabel 
                                    label="testLabel"
                                    control={
                                        <Checkbox
                                            checked={!isAlone} 
                                            onChange={e => {
                                                setIsAlone(false)
                                            }}
                                            sx={{
                                                color: '#021442',
                                            '&.Mui-checked': {
                                                color: '#021442',
                                            }
                                            }}
                                        /> 
                                    }
                                />
                                <span>Não</span>
                            </div>
                        </div>
                    </div>}
                <div className="flight-base-status">
                    <footer>
                        { actualStage !== 0 && <Button onClick={handleBackStage}>Voltar</Button>}
                        { actualStage !== listStages.length && <Button onClick={handlePassStage}>Avançar</Button>}
                    </footer>
                </div>
                </main>
            </div>
    )
}