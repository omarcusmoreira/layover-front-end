import { Button } from "@mui/material";
import { Delete } from "@mui/icons-material";

import {
    RoomInfosItemContainer,
    RoomInfosItens,
    RoomInfosItem,
  } from "./styles";

interface RoomDescriptionProps {
    type: string;
    price: number;
    quantity: number;
    handleRemove: (index: number) => void;
    index: number;
}

export function RoomDescription({type,price,quantity,handleRemove,index}: RoomDescriptionProps) {
    return (
        <RoomInfosItemContainer>
            <RoomInfosItens>
                <RoomInfosItem>Tipo : <span>{type}</span></RoomInfosItem>
                <RoomInfosItem>Preço Inicial : <span>R${price}</span></RoomInfosItem>
                <RoomInfosItem>Quantidade : <span>{quantity}</span></RoomInfosItem>
            </RoomInfosItens>
            <Button onClick={()=>{handleRemove(index)}}
            sx={{ float:"right", marginTop:"4px", minWidth: "38px", color: "#fff",  height: "38px", borderRadius: "19px", backgroundColor: "#021442", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
                <Delete />
            </Button>
        </RoomInfosItemContainer>
    )
}