import { useEffect, useState } from 'react'

import { Step, Stepper,Box } from "@mui/material";

import './style.css'

const navegations = [
    {text:'Verificar localizador do voo'},
    {text:'Adicionar Passageiro'},
    {text:'Adicionar Conexões'},
    {text:'Especificar Problemas'},
    {text:'Pegar Vouchers'}
]

const navegationsAlone = [
    {text:'Verificar localizador do voo'},
    {text:'Adicionar Conexões'},
    {text:'Especificar Problemas'},
    {text:'Pegar Vouchers'}
]

export function Navigation({isAlone,index,returnIndex}) {
    const [navigationList,setNavigationList] = useState(navegations)
    const [actualIndex,setActualIndex] = useState(index)

    useEffect(()=>{
        if(isAlone) setNavigationList(navegationsAlone)
        else setNavigationList(navegations)
    },[isAlone])

    const handlePassIndex = i => {returnIndex(i)}

    return (
        <Box className="navegation">
            <Stepper 
                orientation="vertical"
                className="navegation-component"
                activeStep={actualIndex}
                alternativeLabel
            >
                {navigationList.map((value,key)=>(
                    <Step 
                    className={index < key ? 'item':'item-passed' }
                    key={key}
                    >
                        {index < key ?
                        <p>{value.text}</p>:
                        <p onClick={()=>{setActualIndex(key);handlePassIndex(key)}}>{value.text}</p>
                    }
                    </Step>
                ))}
                
            </Stepper>
        </Box>
    )

}