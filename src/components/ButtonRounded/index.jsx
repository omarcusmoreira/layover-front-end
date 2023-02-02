import React from "react";
import Button from '@mui/material/Button';
export function ButtonRounded({text,icon,size}) {
    return (
        <div className="button-rounded">
            <Button 
                endIcon={icon} 
                sx={{
                    textTransform:'capitalize',
                    backgroundColor:'#021442',
                    borderRadius:'2rem',
                    padding:'.5rem',
                    color:'#fff',
                    ':hover':{
                        backgroundColor:'#020d27'
                    }
                }}
            >
                {text}</Button>
        </div>
    )
}