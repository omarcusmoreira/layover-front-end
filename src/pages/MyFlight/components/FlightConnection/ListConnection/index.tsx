import { useState } from "react";

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

import { TextField } from "@mui/material";


export function ListConnection({connection,index,updated,remove}:any) {
    const [isEdit,setIsEdit] = useState(false)
    const [textConnection,setTextConnection] = useState(connection)
    const [type,setType] = useState('')

    function handleRemoveConnection(index:any) {
        remove(index)
    }

    function saveConnection() {
        setTextConnection(type)
        setIsEdit(false)
        updated(type,index)
    }

    return (
        <div
            key={index}
            className="item-connection"
        >
        {!isEdit? 
            <>
                <p>{index+1} - {textConnection}</p>
                <div>
                    <span onClick={()=>{handleRemoveConnection(index)}}><DeleteIcon/></span>
                    <span onClick={()=>{setIsEdit(true)}}><EditIcon/></span>
                </div>
            </>
            :
            <>
                <TextField placeholder={connection} onChange={e => setType(e.target.value)}/>
                <div>
                    <span onClick={()=>{handleRemoveConnection(index)}}><DeleteIcon/></span>
                    <span onClick={saveConnection}><CheckIcon/></span>
                </div>
            </>
        }
            
        </div>
    )
}