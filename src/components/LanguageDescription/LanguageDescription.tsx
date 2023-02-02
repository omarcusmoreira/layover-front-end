import { useState } from "react";
import { MenuItem, Select,Button } from "@mui/material";

import './style.css'

export function LanguageDescription({handleChange,index,handleRemove,languageSelect,levelSelect}: any) {
    const [language,setLanguage] = useState('en')
    const [level,setLevel] = useState('Begginer')

    return (
        <div className="language-description">
            <div className="language-action">
                <Select className="select-language"
                id="language-select"
                onChange={(e)=>{
                    setLanguage(e.target.value)
                    handleChange(e.target.value,level,index)
                }}
                value={languageSelect}
                >
                    <MenuItem value='pt'>Portugues</MenuItem>
                    <MenuItem value='en' >Ingles</MenuItem>
                    <MenuItem value='es'>Espanhol</MenuItem>
                    <MenuItem value='de'>Alemao</MenuItem>
                    <MenuItem value='it'>Italiano</MenuItem>
                    <MenuItem value='fr'>Frances</MenuItem>
                    <MenuItem value='ru'>Russo</MenuItem>
                    <MenuItem value='ar'>Arabe</MenuItem>
                </Select>
                <Select className="select-language"
                id="language-select"
                onChange={(e)=>{
                    setLevel(e.target.value)
                    handleChange(language,e.target.value,index)
                }}
                value={levelSelect}
                >
                    <MenuItem value='Begginer'>Básico</MenuItem>
                    <MenuItem value='Intermediate'>Intermedário</MenuItem>
                    <MenuItem value='Advanced'>Avançado</MenuItem>
                    <MenuItem value='Fluency'>Fluente</MenuItem>
                    <MenuItem value='Native'>Nativo</MenuItem>
                </Select>
            </div>
            <div className="language-remove">
                <Button 
                    onClick={()=>{handleRemove(index)}}
                >Remover</Button>
            </div>
        </div>
    )
}