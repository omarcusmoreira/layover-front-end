import { Button } from "@mui/material";
import './style.css'

export function RoomDescription({type,price,quantity,handleRemove,index}: any) {
    return (
        <div className="room-infos-item-container">
            <div className="room-infos-item">
                <p>Tipo : {type}</p>
                <p>Preço Inicial : R${price}</p>
                <p>Quantidade : {quantity}</p>
            </div>
            <div>
                <Button 
                    onClick={()=>{handleRemove(index)}}
                >Remover</Button>
            </div>
        </div>
    )
}